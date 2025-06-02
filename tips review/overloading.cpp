#include <iostream>
#include <string>

// 1. 두 정수를 더하는 add 함수
int add(int a, int b) {
  std::cout << "Integer addition function called!" << std::endl;
  return a + b;
}

// 2. 세 정수를 더하는 add 함수 (매개변수 개수가 다름)
int add(int a, int b, int c) {
  std::cout << "Function for adding three integers called!" << std::endl;
  return a + b + c;
}

// 3. 두 실수를 더하는 add 함수 (매개변수 타입이 다름)
double add(double a, double b) {
  std::cout << "Floating-point addition function called!" << std::endl;
  return a + b;
}

// 4. 문자열을 출력하는 print 함수
void print(std::string message) {
  std::cout << "String output: " << message << std::endl;
}

// 5. 정수를 출력하는 print 함수
void print(int number) {
  std::cout << "Integer output: " << number << std::endl;
}

int main() {
  // 어떤 add 함수가 호출될까?
  int sum1 = add(5, 3); // 매개변수 2개인 정수 add 함수 호출
  std::cout << "total: " << sum1 << std::endl; // 출력: 합계: 8

  std::cout << std::endl;

  int sum2 = add(1, 2, 3); // 매개변수 3개인 정수 add 함수 호출
  std::cout << "total: " << sum2 << std::endl; // 출력: 합계: 6

  std::cout << std::endl;

  double sum3 = add(3.5, 2.1); // 매개변수 2개인 실수 add 함수 호출
  std::cout << "total: " << sum3 << std::endl; // 출력: 합계: 5.6

  std::cout << std::endl;

  // 어떤 print 함수가 호출될까?
  print("Hello!"); // 문자열 print 함수 호출
  print(12345);        // 정수 print 함수 호출

  return 0;
}