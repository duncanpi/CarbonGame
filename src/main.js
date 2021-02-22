// Variables

var _totalEmissions;

function getTotalEmissions()
{
    /*
    var val;
    // foreach set category add up emissions;
    State.variables.getTotalEmissions = val;
    */
}

State.variables.totalEmissionCalculated = false;

State.variables.timePeriod = 
{ 
    Daily: "Daily", 
    Weekly: "Weekly", 
    Monthly: "Monthly", 
    Yearly:"Yearly" 
};

State.variables.categories =
{
    clothing: 
    {
        set: false,
        intensity: 0.400768031363972,
        annualSpend: 0,
        emissions: function()
        {
            return this.co2eIntensity * this.annualSpend;
        }
    }
};

window.getAnnualSpend = function(timePeriod, spendPerPeriod) 
{
    var retVal;

    switch(timePeriod)
    {
        case timePeriod.Daily:
            retVal = spendPerPeriod * 365;
            break;
        case timePeriod.Weekly:
            retVal = spendPerPeriod * 52;
            break;
        case timePeriod.Monthly:
            retVal = spendPerPeriod * 12;
            break;
        case timePeriod.Yearly:
        default:
            retVal = spendPerPeriod;
            break;
    }
    return retVal;
};

// Templates
Template.add('totalEmissions', function () {
    if(!_totalEmissionCalculated)
    {
        _totalEmissions = getTotalEmissions();
    }
    return _totalEmissions;
});