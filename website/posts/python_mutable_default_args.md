---
title: Mutable Default Arguments in Python | Jun Jie
date: 2025-09-02
synopsis: Explaining a common pitfall when using Python's default function arguments.
---

Recently, I made a beginner mistake when it comes to using mutable data structures (lists, dictionaries, etc.) in default arguments.

Take this code snippet as an example:

```python
def func(a = []):
    return a

arr1 = func()
arr2 = func()

arr1.append("a")

print(arr1, arr2)
```

Output:

```python
['a'] ['a']
```

Why did mutating `arr1` affect `arr2`? Shouldn't they be different list instances?

## Why?

Looking at the Python docs at [8.7. Function definitions](https://docs.python.org/3.10/reference/compound_stmts.html#function-definitions), it states that `the expression is evaluated once, when the function is defined, and that the same “pre-computed” value is used for each call`.

This behaviour works with primitive types, but unexpected errors occur when using mutable objects, since the same object instance is used for every function call, instead of a new instance being created.

Thus, the output is attributed to `arr1` and `arr2` sharing the same `list` instance.

## The Fix

To use mutable objects as default arguments in Python, we can use the primitive `None` as the default value, then explicitly test for it:

```python
from typing import Optional, List

def func(a: Optional[List[int]] = None) -> List[int]:
    if a is None:
        return []
    return a

arr1 = func()
arr2 = func()

arr1.append("a")

print(arr1, arr2)
```

Output:

```python
['a'] []
```

The pattern above, ensures that a new object instance is created every time the function is called.

And if there's one thing to remember, it is to prevent using mutable data types directly as default arguments.

## References

- [8. Compound Statements - Python 3.10 Documentation](https://docs.python.org/3.10/reference/compound_stmts.html#function-definitions)
- [Python Mutable Object as Default Argument - Lei Mao's Log Book](https://leimao.github.io/blog/Python-Default-Argument-Mutable-Object/)