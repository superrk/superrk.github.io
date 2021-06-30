---
title: kotlin 协程之async和withContext
date: 2021-03-10
categories:
 - kotlin
tags:
 - 协程 
---

> talk is cheap,show code
<!-- more -->
``` kotlin

fun main() = runBlocking {

    val elapsedTime = measureTimeMillis {
        doMethod()
    }
    println("耗时 $elapsedTime")
}

private suspend fun doMethod() {
    coroutineScope {
        val value1 = async { intValue1() }
        val value2 = async { intValue2() }
        val value3 = async {
            val value3 = withContext(Dispatchers.Default) {
                intValue3()
            }
            val value4 = withContext(Dispatchers.Default) {
                intValue4()
            }
            value3 + value4
        }
        println("结果是 ${value1.await() + value2.await() + value3.await()}")
    }
}

private suspend fun intValue1(): Int {
    delay(1000)
    return 1
}

private suspend fun intValue2(): Int {
    delay(2000)
    return 2
}


private suspend fun intValue3(): Int {
    delay(1000)
    return 3
}

private suspend fun intValue4(): Int {
    delay(1000)
    return 4
}

```