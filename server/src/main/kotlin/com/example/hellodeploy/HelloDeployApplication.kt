package com.example.hellodeploy

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class HelloDeployApplication

fun main(args: Array<String>) {
    print("=============================")
    print("main start")
    print("=============================")
    runApplication<HelloDeployApplication>(*args)
}
