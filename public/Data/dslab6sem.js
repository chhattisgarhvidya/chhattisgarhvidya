export const content = [
    {
        "question": "1. Write a C / C++ program for encryption Program for Caesar Cipher",
        "description": "This program implements the Caesar Cipher technique, where each letter in the plaintext is shifted a certain number of places down or up the alphabet.",
        "code": `
#include <iostream>
#include <string>
using namespace std;

string caesarCipher(string text, int shift) {
    string result = "";
    for (int i = 0; i < text.length(); i++) {
        if (isalpha(text[i])) {
            char offset = islower(text[i]) ? 'a' : 'A';
            result += char(int(text[i] + shift - offset) % 26 + offset);
        } else {
            result += text[i];
        }
    }
    return result;
}

int main() {
    string text;
    int shift;
    cout << "Enter text: ";
    getline(cin, text);
    cout << "Enter shift value: ";
    cin >> shift;

    string encryptedText = caesarCipher(text, shift);
    cout << "Encrypted text: " << encryptedText << endl;
    return 0;
}
        `
    },
    {
        "question": "2. Write a C / C++ program for encryption Program for Shift Cipher",
        "description": "The Shift Cipher is a type of substitution cipher where each letter in the plaintext is 'shifted' by a specified number. This program demonstrates how to perform the shift operation on characters.",
        "code": `
#include <iostream>
#include <string>
using namespace std;

string shiftCipher(string text, int shift) {
    string result = "";
    for (int i = 0; i < text.length(); i++) {
        if (isalpha(text[i])) {
            char base = islower(text[i]) ? 'a' : 'A';
            result += char((text[i] - base + shift) % 26 + base);
        } else {
            result += text[i];
        }
    }
    return result;
}

int main() {
    string text;
    int shift;
    cout << "Enter text: ";
    getline(cin, text);
    cout << "Enter shift value: ";
    cin >> shift;

    string encryptedText = shiftCipher(text, shift);
    cout << "Encrypted text: " << encryptedText << endl;
    return 0;
}
        `
    },
    {
        "question": "3. Write a C / C++ program to generate pseudo random numbers",
        "description": "This program generates pseudo-random numbers using standard libraries such as 'rand()' and 'srand()' in C/C++. It shows how to produce numbers that appear random, but are deterministically generated.",
        "code": `
#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

int main() {
    srand(time(0)); // Seed the random number generator
    for (int i = 0; i < 5; i++) {
        cout << "Random number " << i+1 << ": " << rand() % 100 << endl;
    }
    return 0;
}
        `
    },
    {
        "question": "4. Write a C / C++ program for RSA algorithm taking P and Q randomly",
        "description": "This program demonstrates the RSA encryption algorithm. It generates large prime numbers P and Q randomly, computes the public and private keys, and encrypts/decrypts messages using RSA.",
        "code": `
#include <iostream>
#include <cmath>
#include <cstdlib>
#include <ctime>
using namespace std;

long long gcd(long long a, long long b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}

long long modExp(long long base, long long exp, long long mod) {
    long long result = 1;
    while (exp > 0) {
        if (exp % 2 == 1) result = (result * base) % mod;
        base = (base * base) % mod;
        exp /= 2;
    }
    return result;
}

long long generatePrime() {
    long long prime;
    while (true) {
        prime = rand() % 100 + 50; // Generate random number between 50 and 150
        bool isPrime = true;
        for (long long i = 2; i <= sqrt(prime); i++) {
            if (prime % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) break;
    }
    return prime;
}

int main() {
    srand(time(0));

    long long p = generatePrime();
    long long q = generatePrime();
    long long n = p * q;
    long long phi = (p - 1) * (q - 1);

    long long e = 3; // Public key exponent
    while (gcd(e, phi) != 1) e++;

    long long d = 0;
    while ((d * e) % phi != 1) d++;

    cout << "Public key: (" << e << ", " << n << ")" << endl;
    cout << "Private key: (" << d << ", " << n << ")" << endl;

    long long message;
    cout << "Enter message to encrypt: ";
    cin >> message;

    long long encrypted = modExp(message, e, n);
    long long decrypted = modExp(encrypted, d, n);

    cout << "Encrypted message: " << encrypted << endl;
    cout << "Decrypted message: " << decrypted << endl;

    return 0;
}
        `
    },
    {
        "question": "5. Write a C / C++ program for Diffie Hellman Key Exchange algorithm",
        "description": "The Diffie-Hellman Key Exchange algorithm allows two parties to establish a shared secret over an insecure channel. This program demonstrates how to generate and exchange keys securely.",
        "code": `
#include <iostream>
#include <cmath>
using namespace std;

long long modExp(long long base, long long exp, long long mod) {
    long long result = 1;
    while (exp > 0) {
        if (exp % 2 == 1) result = (result * base) % mod;
        base = (base * base) % mod;
        exp /= 2;
    }
    return result;
}

int main() {
    long long p = 23; // Prime number
    long long g = 5;  // Primitive root
    
    long long privateA = 6;  // Alice's private key
    long long privateB = 15; // Bob's private key
    
    long long A = modExp(g, privateA, p);
    long long B = modExp(g, privateB, p);
    
    long long sharedKeyA = modExp(B, privateA, p);
    long long sharedKeyB = modExp(A, privateB, p);
    
    cout << "Alice's shared key: " << sharedKeyA << endl;
    cout << "Bob's shared key: " << sharedKeyB << endl;
    
    return 0;
}
        `
    },
    {
        "question": "6. Case study of software like CrypTool, HashCalc",
        "description": "CrypTool is an open-source software that provides various cryptographic algorithms and functions, including encryption, hashing, and digital signatures. HashCalc is a tool for calculating cryptographic hash functions for files and strings. A case study could involve comparing these tools based on usability, supported algorithms, and features for cryptographic analysis.",
        "code": ""
    },
    {
        "question": "7. Working with some important window based commands used for investigating and configuring computer network: ipconfig, Ping, nbtstat, telnet, netstat etc.",
        "description": "These are essential command-line tools for investigating and managing networks. They help you configure IP addresses, test network connectivity (ping), analyze network traffic, and troubleshoot network issues. For example, 'ipconfig' shows network interface information, 'ping' tests connectivity to a host, and 'netstat' shows network statistics.",
        "code": ""
    },
    {
        "question": "8. Write a C / C++ program for encryption Program for Blowfish cipher",
        "description": "Blowfish is a symmetric-key block cipher that uses 64-bit blocks and a variable-length key. This program demonstrates how to implement Blowfish encryption and decryption.",
        "code": `
#include <iostream>
#include <string>
using namespace std;

class Blowfish {
public:
    string encrypt(string text, string key) {
        // Blowfish encryption logic (simplified)
        string encrypted = "";
        for (int i = 0; i < text.length(); i++) {
            encrypted += char(text[i] ^ key[i % key.length()]);
        }
        return encrypted;
    }

    string decrypt(string encryptedText, string key) {
        string decrypted = "";
        for (int i = 0; i < encryptedText.length(); i++) {
            decrypted += char(encryptedText[i] ^ key[i % key.length()]);
        }
        return decrypted;
    }
};

int main() {
    Blowfish bf;
    string text, key;
    cout << "Enter text to encrypt: ";
    getline(cin, text);
    cout << "Enter key: ";
    getline(cin, key);

    string encrypted = bf.encrypt(text, key);
    cout << "Encrypted text: " << encrypted << endl;

    string decrypted = bf.decrypt(encrypted, key);
    cout << "Decrypted text: " << decrypted << endl;

    return 0;
}
        `
    },
    {
        "question": "9. Write a C / C++ program for encryption Program for Fiestal cipher",
        "description": "The Fiestal Cipher is a structure used in many block ciphers. This program demonstrates how to encrypt and decrypt messages using the Fiestal network structure.",
        "code": `
#include <iostream>
#include <bitset>
using namespace std;

class FiestalCipher {
public:
    string encrypt(string text, int key) {
        string encrypted = "";
        for (int i = 0; i < text.length(); i++) {
            char encryptedChar = text[i] ^ key;  // Simple XOR encryption for demonstration
            encrypted += encryptedChar;
        }
        return encrypted;
    }

    string decrypt(string encryptedText, int key) {
        string decrypted = "";
        for (int i = 0; i < encryptedText.length(); i++) {
            char decryptedChar = encryptedText[i] ^ key;  // Simple XOR decryption
            decrypted += decryptedChar;
        }
        return decrypted;
    }
};

int main() {
    FiestalCipher fc;
    string text;
    int key;
    
    cout << "Enter text to encrypt: ";
    getline(cin, text);
    cout << "Enter encryption key (integer): ";
    cin >> key;

    string encrypted = fc.encrypt(text, key);
    cout << "Encrypted text: " << encrypted << endl;

    string decrypted = fc.decrypt(encrypted, key);
    cout << "Decrypted text: " << decrypted << endl;

    return 0;
}
        `
    }
];
