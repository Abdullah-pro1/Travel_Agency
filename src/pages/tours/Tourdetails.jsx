import React from "react";
import { useParams } from "react-router-dom";
export default function TourDetails() {
  const { tourId } = useParams();
  return <div>Details for tour: {tourId}</div>;
}