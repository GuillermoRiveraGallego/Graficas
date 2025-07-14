import { useEffect } from "react";
import { useCatastroData } from "@/hooks/useCatastroData";
import DataUnHotel from "@/components/layout/dataUnHotel";
import { SkeletonHotel } from "@/components/spinner/skeleton";
import { Inicio } from "@/components/layout/Inicio";

const Dashboard = ({ hotel, visibleHotels }) => {
  const { data, loading, error, fetchData, fetchAllHotelsData } =
    useCatastroData();

  useEffect(() => {
    if (hotel?.refCat === "GLOBAL") {
      fetchAllHotelsData();
    } else if (hotel?.refCat) {
      fetchData(hotel.refCat);
    }
  }, [hotel]);

  if (loading) return <SkeletonHotel />;
  if (error) return <p>Error: {error}</p>;

  if (hotel?.refCat === "GLOBAL") {
    if (!Array.isArray(data)) {
      return <p className="text-center">Cargando resumen global...</p>;
    }

    const visibles = data.filter((d) =>
      visibleHotels.some((h) => h.refCat === d.refCat && h.visible)
    );

    return visibles.length ? (
      <Inicio data={visibles} />
    ) : (
      <p className="text-center">No hay datos visibles para el resumen.</p>
    );
  }

  if (data) {
    return <DataUnHotel data={data} hotel={hotel} />;
  }

  return (
    <p className="text-center">Selecciona una propiedad del menú lateral.</p>
  );
};

export default Dashboard;
