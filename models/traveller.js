const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function () {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => 
    journey.transport === transport
  )
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => 
    journey.distance > minDistance
  );
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) =>
    total + journey.distance, 0);

};

Traveller.prototype.getUniqueModesOfTransport = function () {
  // const uniqueTransport = new Set();
  // this.journeys.forEach(journey => uniqueTransport.add(journey.transport))
  // return Array.from(uniqueTransport);
  const modesOfTransport = this.journeys.map(journey => journey.transport);
  const uniqueTransport = new Set(modesOfTransport);
  return Array.from(uniqueTransport)
};


module.exports = Traveller;
