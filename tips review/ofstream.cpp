#include <iostream>
#include <fstream> // 파일 입출력 헤더

int main() {
    // 1. ofstream 객체 생성
    std::ofstream outputFile;

    // 2. 파일 열기 (파일이 없으면 생성, 있으면 덮어쓰기)
    outputFile.open("example.txt"); // 또는 std::ofstream outputFile("example.txt");

    // 3. 파일 열기 성공 여부 확인
    if (outputFile.is_open()) {
        // 4. 파일에 데이터 쓰기
        outputFile << "Hello, C++ File I/O!" << std::endl;
        outputFile << "This is a second line." << std::endl;
        outputFile << 12345 << std::endl; // 숫자도 쓸 수 있습니다.

        std::cout << "data was successfully written in example.txt." << std::endl;

        // 5. 파일 닫기
        outputFile.close();
    } else {
        std::cerr << "Error: can't open the file." << std::endl;
    }

    return 0;
}