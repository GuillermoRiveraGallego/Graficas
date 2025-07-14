export function calcularResumen(data) {
  const resumen = {
    totalInmuebles: 0,
    totalSuperficie: 0,
    superficiePorTipo: {},
    superficiePorProvincia: {},
    inmueblesPorProvincia: {},
  };

  const visibles = data?.filter((h) => h.visible);

  visibles?.forEach((hotel) => {
    const result = hotel.raw?.consulta_dnprcResult;
    if (!result) return;

    const construcciones = Array.isArray(result?.bico?.lcons)
      ? result.bico.lcons
      : result?.bico?.lcons
      ? [result.bico.lcons]
      : [];

    if (!construcciones.length) return;

    const provincia = result?.bico?.bi?.dt?.np || "Desconocida";

    resumen.totalInmuebles += 1;
    resumen.inmueblesPorProvincia[provincia] =
      (resumen.inmueblesPorProvincia[provincia] || 0) + 1;

    construcciones.forEach((cons) => {
      const tipo = cons?.lcd?.toUpperCase() || "DESCONOCIDO";
      const superficieStr = cons?.dfcons?.stl?.replace(",", ".") || "0";
      const superficie = parseFloat(superficieStr) || 0;

      resumen.totalSuperficie += superficie;

      resumen.superficiePorTipo[tipo] =
        (resumen.superficiePorTipo[tipo] || 0) + superficie;

      resumen.superficiePorProvincia[provincia] =
        (resumen.superficiePorProvincia[provincia] || 0) + superficie;
    });
  });

  resumen.totalSuperficie = Math.round(resumen.totalSuperficie * 1000) / 1000;

  resumen.superficieMedia =
    resumen.totalInmuebles > 0
      ? Math.round((resumen.totalSuperficie / resumen.totalInmuebles) * 1000) /
        1000
      : 0;

  return resumen;
}
