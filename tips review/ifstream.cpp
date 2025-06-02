#include <iostream>
#include <fstream> // 파일 입출력 헤더
#include <string>  // std::getline 사용을 위해

int main() {
    // 1. ifstream 객체 생성
    std::ifstream inputFile;

    // 2. 파일 열기
    inputFile.open("example.txt"); // 또는 std::ifstream inputFile("example.txt");

    // 3. 파일 열기 성공 여부 확인
    if (inputFile.is_open()) {
        std::string line;
        std::cout << "the contents of example.txt:" << std::endl;

        // 4. 파일에서 한 줄씩 데이터 읽기 (파일의 끝까지)
        while (getline(inputFile, line)) { // getline(스트림, 문자열) 함수로 한 줄씩 읽음
            std::cout << line << std::endl;
        }

        // 다른 방법: 단어 단위로 읽기
        // std::string word;
        // while (inputFile >> word) { // 공백 단위로 단어를 읽음
        //     std::cout << word << std::endl;
        // }

        // 5. 파일 닫기
        inputFile.close();
    } else {
        std::cerr << "Error: can't open the file. (File does not exist or permission issue)" << std::endl;
    }

    return 0;
}