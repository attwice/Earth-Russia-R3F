export function coordToVec3(
  lat: number,
  lon: number,
  radius: number
): Record<'position' | 'rotation', [number, number, number]> {
  var latRad = lat * (Math.PI / 180)
  var lonRad = -lon * (Math.PI / 180)

  return {
    position: [
      Math.cos(latRad) * Math.cos(lonRad) * radius,
      Math.sin(latRad) * radius,
      Math.cos(latRad) * Math.sin(lonRad) * radius,
    ],
    rotation: [0.0, -lonRad, latRad - Math.PI * 0.5],
  }
}
