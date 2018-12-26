module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: [
        "<rootDir>/src"
    ],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    moduleFileExtensions: [
        "ts",
        "js",
        "json",
    ],
    moduleNameMapper: {
        "^gen/(.*)": "<rootDir>/dist/$1",
        "^aire/(.*)": "<rootDir>/src/main/$1",
        "^test/(.*)": "<rootDir>/src/test/$1",
    },
    modulePaths: [
        "<rootDir>/src",
        "<rootDir>/node_modules"
    ],
    setupFiles: [
        "<rootDir>/src/test/setup.ts"
    ]
};