import RoomCard from "../components/RoomCard";
import Heading from "../components/Heading";
import getAllRooms from "../app/actions/getAllRooms";

export default async function Home() {
    const rooms = await getAllRooms();
  return (
      <>
          <Heading title={'Available rooms'} />
          {
              rooms?.length > 0 ? (
                  rooms.map((room) => <RoomCard room={room} key={room.id} />)
              ) : (
                  <p>No rooms available at the moment.</p>
              )
          }
      </>
  );
}
