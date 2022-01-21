---
title: java list 点整理
date: 2021-03-10
categories:
 - java
tags:
 - list
---

> talk is cheap,show code
<!-- more -->
## ArrayList

>基于数组实现 Object[] elementData
- 默认最大容量: 10
- 扩容策略，不够是扩充原有容量的一半 。如 15 22 33，扩容时会复制原有对象到新List里
- modCount 快速失败策略

## LinkedList

>基于链表实现 Node<E> first,last
- 默认最大容量: 10
- 扩容策略，不够是扩充原有容量的一半 。如 15 22 33，扩容时会复制原有对象到新List里
- modCount 快速失败策略