package com.example.hellodeploy

class HelloMessage(private var name: String) {

    fun getName(): String {
        return this.name
    }

    fun setName(name: String) {
        this.name = name
    }
}
