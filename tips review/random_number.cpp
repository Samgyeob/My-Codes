#include <iostream>
#include <cstdlib> // rand(), srand() 함수를 위해
#include <ctime>   // time() 함수를 위해 (srand()의 씨앗으로 사용)

int main() {
  // 1. 랜덤 숫자 씨앗 심기 (딱 한 번만 실행!)
  // time(0)은 현재 시간을 숫자로 반환하여, 매번 다른 씨앗을 만듭니다.
  // 이 줄을 실행하지 않으면 프로그램 실행 시마다 같은 랜덤 숫자가 나옵니다.
  srand(static_cast<unsigned int>(time(0)));

  // 2. 0부터 RAND_MAX까지의 랜덤 숫자 만들기 (RAND_MAX는 아주 큰 숫자)
  int randomNum1 = rand();
  std::cout << "very big random number (0 ~ RAND_MAX): " << randomNum1 << std::endl;

  // 3. 특정 범위의 랜덤 숫자 만들기 (예: 1부터 6까지의 주사위 숫자)
  // (rand() % 범위) + 시작값
  int diceRoll = (rand() % 6) + 1; // 0~5 중에서 랜덤 -> +1 하여 1~6
  std::cout << "rolling a dice (1~6): " << diceRoll << std::endl;

  std::cout << std::endl; // 한 줄 띄움

  // 4. 또 다른 주사위 굴리기 (3번 반복)
  std::cout << "rolling three other dices:" << std::endl;
  for (int i = 0; i < 3; ++i) {
    int anotherDice = (rand() % 6) + 1;
    std::cout << (i + 1) << "(st/nd/rd/th) dice: " << anotherDice << std::endl;
  }

  std::cout << std::endl; // 한 줄 띄움

  // 5. 0부터 99까지의 랜덤 숫자 (백분율 등)
  int percentage = rand() % 100; // 0부터 99까지
  std::cout << "random percent (0~99): " << percentage << "%" << std::endl;


  return 0;
}