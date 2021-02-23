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

setup.totalEmissionCalculated = false;

setup.timePeriod = 
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
        emissions: 0
    }
};


window.getAnnualSpend = function(timePeriod, spendPerPeriod) 
{
    var retVal;

    switch(timePeriod)
    {
        case setup.timePeriod.Daily:
            retVal = spendPerPeriod * 365;
            break;
        case setup.timePeriod.Weekly:
            retVal = spendPerPeriod * 52;
            break;
        case setup.timePeriod.Monthly:
            retVal = spendPerPeriod * 12;
            break;
        case setup.timePeriod.Yearly:
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