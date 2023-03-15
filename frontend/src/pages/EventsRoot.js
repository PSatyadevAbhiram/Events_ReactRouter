import { Outlet } from "react-router";
import EventsNavigation from "../components/EventsNavigation";
import React from "react";

function EventsLayout() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}

export default EventsLayout;
