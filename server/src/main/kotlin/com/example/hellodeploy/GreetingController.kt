package com.example.hellodeploy

import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.messaging.handler.annotation.SendTo
import org.springframework.messaging.simp.SimpMessagingTemplate
import org.springframework.stereotype.Controller
import org.springframework.web.util.HtmlUtils

@Controller
class GreetingController(var simpleMessagingTemplate: SimpMessagingTemplate) {

    @MessageMapping("/hello")
    @SendTo("/topic/greetings")
    fun greeting(message: HelloMessage): Greeting {
        return Greeting("Hello, " + HtmlUtils.htmlEscape(message.getName()) + "!")
    }

    fun sendGreeting(text: String) {
        this.simpleMessagingTemplate.convertAndSend("/topic/greetings", Greeting("Hey!! $text"))
    }
}
