/**************************************************************************************************************************************
A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000.
He wants to keep his old car until he can buy the secondhand one.

He thinks he can save $1000 each month but the prices of his old car and of the new one decrease of 1.5 percent per month.
Furthermore this percent of loss increases of 0.5 percent at the end of every two months. Our man finds it difficult to make all these calculations.

Can you help him?

How many months will it take him to save up enough money to buy the car he wants, and how much money will he have left over?
***************************************************************************************************************************************/


function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  var months = 0, moneySaved = 0;
	while (startPriceNew > startPriceOld + moneySaved){
    
    // adding the money saved to this month to savingspermonth
		moneySaved += savingperMonth;
    
    // subtracting depreciation from old and new car values
		startPriceOld -= (startPriceOld * (percentLossByMonth / 100));
		startPriceNew -= (startPriceNew * (percentLossByMonth / 100));
		months++;
    
    // adding extra depreciation every two months
		if (months % 2 == 1){
			percentLossByMonth += .5;
		}
	}
  
  // returning an array with month total and left over money rounded to nearest int
	return [months, Math.round(startPriceOld + moneySaved - startPriceNew)];
}
