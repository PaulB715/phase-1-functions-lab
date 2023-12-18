  function distanceFromHqInBlocks(streetNumber) {
    return Math.abs(streetNumber - 42);
  }
  function distanceFromHqInFeet(location) {
    const blockInFeet = 264;
    const hqLocation = 42;
    const distance = Math.abs(location - hqLocation) * blockInFeet;
    
    return distance;
    }
    function distanceTravelledInFeet(start, end) {
        const feetPerBlock = 264;
        const distanceInBlocks = Math.abs(end - start);
        const distanceInFeet = distanceInBlocks * feetPerBlock;
        return distanceInFeet;
    }
    function calculatesFarePrice(start, destination) {
        const feetPerBlock = 264
        const distanceInBlocks = Math.abs(destination - start)
        const distanceInFeet = distanceInBlocks * feetPerBlock
        if (distanceInFeet <= 400) {
          return 0;
        } else if (distanceInFeet > 400 && distanceInFeet < 2000) {
            return (distanceInFeet - 400) * 0.02 
        } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
            return 25 
        } else if(distanceInFeet > 2500) {
            return 'cannot travel that far'
        }
    }