const number = function (busStops) {
  let penumpang = 0;

  for(let i = 0; i < busStops.length; i++){
    const [on, off] = busStops[i];
    penumpang += on - off;
  };

  return penumpang;
};
