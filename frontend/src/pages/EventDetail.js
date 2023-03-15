import {  json, useRouteLoaderData, redirect } from "react-router";
import EventItem from '../components/EventItem'
function EventDetail() {
  const data = useRouteLoaderData("event-detail");
  return (
    <EventItem event={data.event}/>
  );
}

export default EventDetail;
export async function loader({request, params}){
  const id = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${id}`);
  if(!response.ok){
    throw new json({message:"Couldnt fetch event details"}, {status: 500});
  }
  return response;
}

export async function action({request, params}){
  const id = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${id}`, {
    method: request.method, 
  });
  if(!response.ok){
    throw new json({message:"Couldnt delete"}, {status: 500});
  }
  return redirect('/events');
}
