import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRoomStore = defineStore('room', () => {
  const currentRoom = ref('landing')
  const visitedRooms = ref(new Set())

  function enterRoom(roomName) {
    visitedRooms.value.add(roomName)
    currentRoom.value = roomName
  }

  return { currentRoom, visitedRooms, enterRoom }
})
