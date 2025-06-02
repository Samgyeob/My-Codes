#include <iostream>
#include <iomanip>
#include <cmath>

using namespace std;

int main()
{
    double c = 40075.017; //circumference of earth (km)
    const double PI = 3.1415926535898; //π
   double r = c / (2 * PI); //radius of earth (km)
   double V = 4 * PI * pow(r, 3) / 3; //volume of earth (km^3)

   cout << "Yun" << endl; //FirstName
   cout << "Cho" << endl; //LastName
   cout << "yun.cho86" << endl; //Blinn username
   cout << "1436" << endl; //Course number
   cout << "R11" << endl; //Section
   cout << "The Blue Marble" << endl; //Lab name
   cout << fixed << setprecision(5) << c << endl; //Circumference (5 decimal places)
   cout << fixed << setprecision(5) << r << endl; //Radius (5 decimal places)
   cout << fixed << setprecision(5) << V << endl; //Volume (5 decimal places)
   cout << "furey, edward \"circle calculator\" at https://www.calculatorsoup.com/calculators/geometry-plane/circle.php from calculatorsoup, https://www.calculatorsoup.com - online calculators" << endl; //URL for circle
   cout << "furey, edward \"sphere calculator\" at https://www.calculatorsoup.com/calculators/geometry-solids/sphere.php from calculatorsoup, https://www.calculatorsoup.com - online calculators" << endl; //URL for sphere

   return 0;
}
