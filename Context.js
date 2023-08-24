import React, { Component } from 'react'
import items from './data'

const RoomContext=React.createContext();

 class RoomProvider extends Component {
    state={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true


    };

    //getdata

    componentDidMount()
    {
        let rooms=this.formatData(items)
        console.log("all rooms from context=",rooms);
        let featuredRooms=rooms.filter(room=>room.featured===true);
        console.log("value of featured=",featuredRooms);
        this.setState(
            {
                rooms,
                featuredRooms,
                sortedRooms:rooms,
                loading:false
                

            }
        );
        
    }
    formatData(items)
    {
        let tempitems=items.map(item=>{
            let id=item.sys.id
            let images=item.fields.images.map(image=> image.fields.file.url)

            let room={...item.fields,images,id}
            return room;
          

            });
            return tempitems
        }
    
  render() {
    return (
      <RoomContext.Provider value={{...this.state}}>
        {this.props.children}
      </RoomContext.Provider>
    )
  }}


const RoomConsumer=RoomContext.Consumer;
export {RoomProvider,RoomConsumer,RoomContext}