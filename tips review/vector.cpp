#include <iostream>
#include <vector> // std::vector 사용을 위해 포함
#include <string> // 문자열 사용을 위해 포함
#include <algorithm> // std::sort 사용을 위해 포함

int main() {
    // 1. vector 선언 및 초기화
    std::vector<int> numbers; // 비어 있는 int형 vector 선언

    // 2. 요소 추가: push_back()
    numbers.push_back(10); // [10]
    numbers.push_back(20); // [10, 20]
    numbers.push_back(30); // [10, 20, 30]

    std::cout << "present size of vector: " << numbers.size() << std::endl; // 출력: 3

    // 3. 요소 접근: [] 연산자 또는 at()
    std::cout << "first element: " << numbers[0] << std::endl; // 출력: 10
    std::cout << "second element: " << numbers.at(1) << std::endl; // 출력: 20

    // numbers.at(5); // 이 경우 std::out_of_range 예외 발생 (안전한 접근)
    // numbers[5];    // 이 경우 정의되지 않은 동작 (unsafe, 런타임 오류 가능성)

    // 4. 모든 요소 순회 (반복문 사용)
    std::cout << "all elements of vector: ";
    for (size_t i = 0; i < numbers.size(); ++i) { // size_t는 unsigned integer 타입
        std::cout << numbers[i] << " ";
    }
    std::cout << std::endl;

    // C++11 이후의 범위 기반 for 루프 (더 간결함)
    std::cout << "all elements of vector (Range-based for): ";
    for (int num : numbers) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    // 5. 요소 삭제: pop_back(), erase(), clear()
    numbers.pop_back(); // 마지막 요소 (30) 삭제: [10, 20]
    std::cout << "size after pop_back: " << numbers.size() << std::endl; // 출력: 2

    // numbers.erase(numbers.begin() + 0); // 첫 번째 요소 삭제 (10): [20]
    // std::cout << "erase 후 첫 번째 요소: " << numbers[0] << std::endl; // 출력: 20

    // numbers.clear(); // 모든 요소 삭제 (vector는 비어있지만 메모리 해제는 아님)
    // std::cout << "clear 후 크기: " << numbers.size() << std::endl; // 출력: 0

    // 6. 다른 방식으로 초기화
    std::vector<std::string> names = {"Alice", "Bob", "Charlie"};
    std::cout << "Names vector: ";
    for (const std::string& name : names) { // const 참조로 효율적이고 안전하게 순회
        std::cout << name << " ";
    }
    std::cout << std::endl;

    // 7. 정렬 (알고리즘 라이브러리 사용)
    std::vector<int> unsorted = {5, 2, 8, 1, 9};
    std::sort(unsorted.begin(), unsorted.end()); // begin()과 end()는 반복자(iterator) 반환

    std::cout << "sorted vector: ";
    for (int n : unsorted) {
        std::cout << n << " ";
    }
    std::cout << std::endl;


    return 0;
}