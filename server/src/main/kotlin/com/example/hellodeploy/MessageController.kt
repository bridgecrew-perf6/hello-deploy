package com.example.hellodeploy

import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("api/messages")
class MessageController(val greetingController: GreetingController) {

    @PostMapping
    fun post(@RequestBody message: Message) {
        greetingController.sendGreeting(message.text)
    }
}
