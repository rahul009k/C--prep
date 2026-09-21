# C# Complete Learning Roadmap

A structured roadmap for learning and revising **C# itself** — from fundamentals to advanced language features, performance, internals, and interview preparation.

> **Scope:** This roadmap focuses on C#. Topics such as ASP.NET Core, EF Core, Dapper, Azure, CQRS, and Clean Architecture are intentionally kept outside this roadmap.

---

## 1. C# Basics

### 1.1 Introduction
- [📘 Revision notes](C%23/1.1-introduction-notes.md)
- [ ] What is C#
- [ ] C# and .NET
- [ ] CLR
- [ ] Compilation
- [ ] Managed code
- [ ] C# program structure
- [ ] Namespaces
- [ ] Comments

### 1.2 Variables & Data Types
- [ ] Variables
- [ ] Constants
- [ ] Value types
- [ ] Reference types
- [ ] Built-in data types
- [ ] `var`
- [ ] `object`
- [ ] `dynamic`
- [ ] Nullable types
- [ ] `null`

### 1.3 Type Conversion
- [ ] Implicit conversion
- [ ] Explicit conversion
- [ ] Casting
- [ ] `Convert`
- [ ] `Parse`
- [ ] `TryParse`
- [ ] `is`
- [ ] `as`

### 1.4 Operators
- [ ] Arithmetic operators
- [ ] Comparison operators
- [ ] Logical operators
- [ ] Assignment operators
- [ ] Increment/decrement operators
- [ ] Bitwise operators
- [ ] Conditional operator
- [ ] Null-coalescing operator
- [ ] Null-conditional operator
- [ ] `nameof`
- [ ] `typeof`
- [ ] `sizeof`

### 1.5 Control Flow
- [ ] `if`
- [ ] `else`
- [ ] `switch`
- [ ] Switch expressions
- [ ] `for`
- [ ] `foreach`
- [ ] `while`
- [ ] `do while`
- [ ] `break`
- [ ] `continue`
- [ ] `goto`

### 1.6 Methods
- [ ] Method declaration
- [ ] Parameters
- [ ] Return values
- [ ] `void`
- [ ] Optional parameters
- [ ] Named arguments
- [ ] Method overloading
- [ ] `ref`
- [ ] `out`
- [ ] `in`
- [ ] Expression-bodied methods
- [ ] Local functions

---

## 2. Object-Oriented Programming

### 2.1 Classes & Objects
- [ ] Class
- [ ] Object
- [ ] Fields
- [ ] Properties
- [ ] Methods
- [ ] Constructors
- [ ] Constructor overloading
- [ ] Object initializers
- [ ] Static members
- [ ] `this`
- [ ] `base`

### 2.2 Encapsulation
- [ ] Access modifiers
- [ ] `public`
- [ ] `private`
- [ ] `protected`
- [ ] `internal`
- [ ] `protected internal`
- [ ] `private protected`
- [ ] Properties
- [ ] Getters/setters
- [ ] `init`

### 2.3 Inheritance
- [ ] Base class
- [ ] Derived class
- [ ] `virtual`
- [ ] `override`
- [ ] `new`
- [ ] Sealed classes
- [ ] Sealed methods
- [ ] Constructor inheritance

### 2.4 Polymorphism
- [ ] Compile-time polymorphism
- [ ] Runtime polymorphism
- [ ] Method overloading
- [ ] Method overriding
- [ ] Virtual dispatch
- [ ] Base-class references

### 2.5 Abstraction
- [ ] Abstract classes
- [ ] Abstract methods
- [ ] Interfaces
- [ ] Interface implementation
- [ ] Multiple interfaces
- [ ] Default interface methods

---

## 3. Structs, Enums & Records

### 3.1 Structs
- [ ] `struct`
- [ ] Struct vs class
- [ ] Value semantics
- [ ] Readonly structs
- [ ] `ref struct`

### 3.2 Enums
- [ ] Enum declaration
- [ ] Underlying types
- [ ] Casting
- [ ] Parsing enums
- [ ] `Enum.Parse`
- [ ] `Enum.TryParse`
- [ ] `[Flags]` enum

### 3.3 Records
- [ ] Record class
- [ ] Record struct
- [ ] Positional records
- [ ] Value equality
- [ ] `with`
- [ ] Immutability

---

## 4. Strings

### 4.1 String Fundamentals
- [ ] String
- [ ] String immutability
- [ ] String literals
- [ ] Escape characters
- [ ] Verbatim strings
- [ ] Interpolated strings
- [ ] Raw string literals

### 4.2 String Operations
- [ ] `Length`
- [ ] `Contains`
- [ ] `StartsWith`
- [ ] `EndsWith`
- [ ] `Substring`
- [ ] `Replace`
- [ ] `Split`
- [ ] `Join`
- [ ] `Trim`
- [ ] `IndexOf`
- [ ] `LastIndexOf`
- [ ] String comparison

### 4.3 StringBuilder
- [ ] `StringBuilder`
- [ ] `Append`
- [ ] `AppendLine`
- [ ] `Insert`
- [ ] `Remove`
- [ ] StringBuilder vs string

---

## 5. Arrays & Collections

### 5.1 Arrays
- [ ] One-dimensional arrays
- [ ] Multidimensional arrays
- [ ] Jagged arrays
- [ ] Array initialization
- [ ] Array methods

### 5.2 List
- [ ] `List<T>`
- [ ] Add/remove
- [ ] Insert
- [ ] Contains
- [ ] Find
- [ ] Sort
- [ ] Capacity vs Count

### 5.3 Dictionary
- [ ] `Dictionary<TKey,TValue>`
- [ ] Keys and values
- [ ] `TryGetValue`
- [ ] `ContainsKey`
- [ ] Dictionary performance

### 5.4 Other Collections
- [ ] `HashSet<T>`
- [ ] `Queue<T>`
- [ ] `Stack<T>`
- [ ] `LinkedList<T>`

### 5.5 Collection Interfaces
- [ ] `IEnumerable<T>`
- [ ] `ICollection<T>`
- [ ] `IList<T>`
- [ ] `IReadOnlyCollection<T>`
- [ ] `IReadOnlyList<T>`
- [ ] `IDictionary<TKey,TValue>`

---

## 6. Generics

### 6.1 Generic Basics
- [ ] Generic classes
- [ ] Generic methods
- [ ] Generic interfaces
- [ ] Generic delegates
- [ ] Type parameters
- [ ] Type inference

### 6.2 Generic Constraints
- [ ] `where T : class`
- [ ] `where T : struct`
- [ ] `where T : new()`
- [ ] Interface constraints
- [ ] Base-class constraints
- [ ] Multiple constraints

### 6.3 Variance
- [ ] Covariance
- [ ] Contravariance
- [ ] `in`
- [ ] `out`

---

## 7. Exception Handling

### 7.1 Exception Basics
- [ ] Exceptions
- [ ] `try`
- [ ] `catch`
- [ ] `finally`
- [ ] `throw`

### 7.2 Exception Types
- [ ] Built-in exceptions
- [ ] Exception hierarchy
- [ ] Custom exceptions
- [ ] Inner exceptions

### 7.3 Advanced Exception Handling
- [ ] Exception filters
- [ ] `throw` vs `throw ex`
- [ ] Multiple catch blocks
- [ ] Exception propagation
- [ ] When NOT to use exceptions

---

## 8. Delegates

### 8.1 Delegate Basics
- [ ] What is a delegate
- [ ] Declaring delegates
- [ ] Calling delegates
- [ ] Passing delegates
- [ ] Returning delegates
- [ ] Multicast delegates

### 8.2 Built-in Delegates
- [ ] `Action`
- [ ] `Func`
- [ ] `Predicate`

### 8.3 Lambda Expressions
- [ ] Lambda syntax
- [ ] Expression lambda
- [ ] Statement lambda
- [ ] Lambda parameters
- [ ] Closures

---

## 9. Events

### 9.1 Events
- [ ] What is an event
- [ ] Event declaration
- [ ] Event publisher
- [ ] Event subscriber
- [ ] `EventHandler`
- [ ] Custom event arguments

### 9.2 Events vs Delegates
- [ ] Delegate vs event
- [ ] Why events exist
- [ ] Encapsulation of events

---

## 10. LINQ

### 10.1 LINQ Fundamentals
- [ ] What is LINQ
- [ ] Query syntax
- [ ] Method syntax
- [ ] Extension methods
- [ ] Deferred execution
- [ ] Immediate execution

### 10.2 Filtering
- [ ] `Where`
- [ ] `OfType`

### 10.3 Projection
- [ ] `Select`
- [ ] `SelectMany`

### 10.4 Sorting
- [ ] `OrderBy`
- [ ] `OrderByDescending`
- [ ] `ThenBy`
- [ ] `ThenByDescending`

### 10.5 Aggregation
- [ ] `Count`
- [ ] `LongCount`
- [ ] `Sum`
- [ ] `Average`
- [ ] `Min`
- [ ] `Max`
- [ ] `Aggregate`

### 10.6 Element Operators
- [ ] `First`
- [ ] `FirstOrDefault`
- [ ] `Single`
- [ ] `SingleOrDefault`
- [ ] `Last`
- [ ] `LastOrDefault`
- [ ] `ElementAt`
- [ ] `ElementAtOrDefault`

### 10.7 Set Operators
- [ ] `Distinct`
- [ ] `Union`
- [ ] `Intersect`
- [ ] `Except`

### 10.8 Grouping & Joining
- [ ] `GroupBy`
- [ ] `Join`
- [ ] `GroupJoin`
- [ ] `ToLookup`

### 10.9 LINQ Internals
- [ ] `IEnumerable`
- [ ] `IEnumerator`
- [ ] Deferred execution
- [ ] Multiple enumeration
- [ ] `ToList`
- [ ] `ToArray`
- [ ] LINQ performance

---

## 11. Nullable Reference Types

### 11.1 Nullable Concepts
- [ ] Nullable value types
- [ ] Nullable reference types
- [ ] `?`
- [ ] `null`

### 11.2 Null Handling
- [ ] Null checks
- [ ] `??`
- [ ] `??=`
- [ ] `?.`
- [ ] `!`
- [ ] Pattern matching with null

### 11.3 Nullable Analysis
- [ ] Compiler nullable warnings
- [ ] Nullable annotations
- [ ] Null-state analysis

---

## 12. Memory Management

### 12.1 Memory Fundamentals
- [ ] Stack
- [ ] Heap
- [ ] Value types
- [ ] Reference types
- [ ] Boxing
- [ ] Unboxing

### 12.2 Garbage Collection
- [ ] GC
- [ ] Managed memory
- [ ] Generations
- [ ] Gen 0
- [ ] Gen 1
- [ ] Gen 2
- [ ] Large Object Heap
- [ ] Finalization

### 12.3 IDisposable
- [ ] `IDisposable`
- [ ] `Dispose`
- [ ] `using`
- [ ] `using` declaration
- [ ] `IAsyncDisposable`
- [ ] `await using`

---

## 13. Async Programming

### 13.1 Task-Based Programming
- [ ] `Task`
- [ ] `Task<T>`
- [ ] `async`
- [ ] `await`
- [ ] Async methods

### 13.2 Task Operations
- [ ] `Task.WhenAll`
- [ ] `Task.WhenAny`
- [ ] `Task.Delay`
- [ ] `Task.Run`

### 13.3 Cancellation
- [ ] `CancellationToken`
- [ ] `CancellationTokenSource`
- [ ] Cancellation patterns

### 13.4 Common Problems
- [ ] `.Result`
- [ ] `.Wait()`
- [ ] Deadlocks
- [ ] Blocking async code
- [ ] Fire-and-forget
- [ ] `async void`

---

## 14. Multithreading & Concurrency

### 14.1 Threads
- [ ] `Thread`
- [ ] ThreadPool
- [ ] Tasks vs Threads

### 14.2 Synchronization
- [ ] `lock`
- [ ] `Monitor`
- [ ] `Mutex`
- [ ] `Semaphore`
- [ ] `SemaphoreSlim`
- [ ] `Interlocked`

### 14.3 Thread-Safe Collections
- [ ] `ConcurrentDictionary`
- [ ] `ConcurrentQueue`
- [ ] `ConcurrentBag`
- [ ] `ConcurrentStack`

### 14.4 Concurrency Problems
- [ ] Race conditions
- [ ] Deadlocks
- [ ] Thread safety
- [ ] Shared state

---

## 15. Iterators

### 15.1 Iterator Fundamentals
- [ ] `IEnumerable`
- [ ] `IEnumerator`
- [ ] `yield return`
- [ ] `yield break`

### 15.2 Deferred Iteration
- [ ] Lazy execution
- [ ] Iterator state
- [ ] Iterator performance

---

## 16. Pattern Matching

### 16.1 Type Patterns
- [ ] `is`
- [ ] Type pattern
- [ ] Declaration pattern

### 16.2 Property Patterns
- [ ] Property pattern
- [ ] Nested property pattern

### 16.3 Relational Patterns
- [ ] `<`
- [ ] `>`
- [ ] `<=`
- [ ] `>=`

### 16.4 Logical Patterns
- [ ] `and`
- [ ] `or`
- [ ] `not`

### 16.5 List Patterns
- [ ] List patterns
- [ ] Slice patterns

### 16.6 Switch Expressions
- [ ] Switch expressions
- [ ] Exhaustiveness
- [ ] Pattern-based switching

---

## 17. Tuples & Deconstruction

### 17.1 Tuples
- [ ] ValueTuple
- [ ] Named tuples
- [ ] Tuple return values

### 17.2 Deconstruction
- [ ] Tuple deconstruction
- [ ] Object deconstruction
- [ ] Custom `Deconstruct`

---

## 18. Extension Methods

### 18.1 Extension Methods
- [ ] Creating extension methods
- [ ] `this` parameter
- [ ] Extension method rules
- [ ] Extension method resolution

### 18.2 Practical Usage
- [ ] LINQ-style extensions
- [ ] Fluent APIs

---

## 19. Anonymous Types & Object Initialization

### 19.1 Anonymous Types
- [ ] Anonymous objects
- [ ] Read-only properties
- [ ] `var`

### 19.2 Initializers
- [ ] Object initializer
- [ ] Collection initializer
- [ ] Index initializers
- [ ] Collection expressions

---

## 20. Reflection

### 20.1 Reflection Basics
- [ ] `Type`
- [ ] `typeof`
- [ ] `GetType`
- [ ] Assemblies
- [ ] Types
- [ ] Methods
- [ ] Properties
- [ ] Fields

### 20.2 Dynamic Reflection
- [ ] Creating objects
- [ ] Invoking methods
- [ ] Reading properties
- [ ] Setting properties

---

## 21. Attributes

### 21.1 Built-in Attributes
- [ ] `[Obsolete]`
- [ ] `[Serializable]`
- [ ] `[Flags]`
- [ ] `[CallerMemberName]`

### 21.2 Custom Attributes
- [ ] Creating attributes
- [ ] Attribute parameters
- [ ] Reading attributes
- [ ] Attributes + reflection

---

## 22. Expression Trees

### 22.1 Basics
- [ ] Expression trees
- [ ] `Expression<TDelegate>`
- [ ] Lambda vs expression tree

### 22.2 Building Expressions
- [ ] Expression parameters
- [ ] Expression properties
- [ ] Expression calls
- [ ] Expression composition

### 22.3 Practical Usage
- [ ] Dynamic queries
- [ ] LINQ providers
- [ ] Runtime query construction

---

## 23. Equality & Comparison

### 23.1 Equality
- [ ] `==`
- [ ] `Equals`
- [ ] `ReferenceEquals`
- [ ] Value equality
- [ ] Reference equality

### 23.2 Equality Contracts
- [ ] `IEquatable<T>`
- [ ] `GetHashCode`
- [ ] Overriding equality

### 23.3 Comparison
- [ ] `IComparable<T>`
- [ ] `IComparer<T>`
- [ ] Custom sorting

---

## 24. Modern C#

### 24.1 Modern Syntax
- [ ] File-scoped namespaces
- [ ] Global using
- [ ] Target-typed `new`
- [ ] `init`
- [ ] `required`
- [ ] Raw string literals
- [ ] Collection expressions
- [ ] Primary constructors

### 24.2 Modern Type Features
- [ ] Records
- [ ] Record structs
- [ ] `with`
- [ ] Pattern matching
- [ ] Nullable reference types

---

## 25. Advanced Memory & Performance

### 25.1 Stack-Based Memory
- [ ] `Span<T>`
- [ ] `ReadOnlySpan<T>`
- [ ] `Memory<T>`
- [ ] `ReadOnlyMemory<T>`

### 25.2 Allocation Optimization
- [ ] Boxing avoidance
- [ ] `ArrayPool<T>`
- [ ] `ValueTask`
- [ ] Struct performance
- [ ] String allocations

### 25.3 Performance Concepts
- [ ] Allocation
- [ ] GC pressure
- [ ] CPU-bound work
- [ ] I/O-bound work
- [ ] Benchmarking basics

---

## 26. Unsafe C#

### 26.1 Unsafe Basics
- [ ] `unsafe`
- [ ] Pointers
- [ ] Pointer arithmetic
- [ ] `fixed`

### 26.2 Interop
- [ ] Managed vs unmanaged code
- [ ] P/Invoke
- [ ] `Marshal`

> **Priority:** Lower priority for normal backend development, but useful to understand when working close to the runtime or native code.

---

## 27. C# Compilation & Internals

### 27.1 Compilation
- [ ] Source code
- [ ] Roslyn compiler
- [ ] IL
- [ ] Assembly
- [ ] JIT
- [ ] Native machine code

### 27.2 Runtime
- [ ] CLR
- [ ] Metadata
- [ ] Assemblies
- [ ] Type system
- [ ] Garbage collection

### 27.3 Async Internals
- [ ] State machines
- [ ] `async` transformation
- [ ] `await` internals

---

## 28. C# Coding Practices

### 28.1 Clean C# Code
- [ ] Naming conventions
- [ ] Method design
- [ ] Class design
- [ ] Immutability
- [ ] Guard clauses
- [ ] Null handling
- [ ] Avoiding duplication

### 28.2 Common Mistakes
- [ ] Overusing `var`
- [ ] Misusing `dynamic`
- [ ] Blocking async code
- [ ] Excessive LINQ
- [ ] Unnecessary allocations
- [ ] Incorrect exception handling
- [ ] Mutable shared state

### 28.3 C# Design Principles
- [ ] SOLID principles
- [ ] Composition over inheritance
- [ ] Encapsulation
- [ ] Separation of concerns
- [ ] Dependency inversion

---

## 29. Design Patterns in C#

### 29.1 Creational
- [ ] Singleton
- [ ] Factory
- [ ] Abstract Factory
- [ ] Builder
- [ ] Prototype

### 29.2 Structural
- [ ] Adapter
- [ ] Decorator
- [ ] Facade
- [ ] Proxy
- [ ] Composite

### 29.3 Behavioral
- [ ] Strategy
- [ ] Observer
- [ ] Command
- [ ] Chain of Responsibility
- [ ] Template Method
- [ ] Mediator
- [ ] Specification

---

## 30. C# Interview Preparation

### 30.1 Fundamentals
- [ ] Value vs reference type
- [ ] Stack vs heap
- [ ] `var` vs `dynamic`
- [ ] `ref` vs `out`
- [ ] `const` vs `readonly`
- [ ] Class vs struct
- [ ] Boxing/unboxing

### 30.2 OOP
- [ ] Encapsulation
- [ ] Inheritance
- [ ] Abstraction
- [ ] Polymorphism
- [ ] Abstract class vs interface
- [ ] Overloading vs overriding

### 30.3 Collections
- [ ] Array vs List
- [ ] List vs LinkedList
- [ ] Dictionary internals
- [ ] HashSet
- [ ] IEnumerable

### 30.4 LINQ
- [ ] Deferred execution
- [ ] `IEnumerable` vs `IQueryable`
- [ ] `First` vs `Single`
- [ ] `Select` vs `SelectMany`
- [ ] `GroupBy`
- [ ] Joins

### 30.5 Async
- [ ] `async/await`
- [ ] Task
- [ ] Thread vs Task
- [ ] `Task.Run`
- [ ] `Task.WhenAll`
- [ ] `CancellationToken`
- [ ] Deadlocks

### 30.6 Advanced
- [ ] Delegates
- [ ] Events
- [ ] Generics
- [ ] Reflection
- [ ] Expression trees
- [ ] GC
- [ ] IDisposable
- [ ] Span
- [ ] Records

---

# Recommended Learning Order

For a .NET developer, follow this order instead of jumping randomly between topics:

```text
Phase 1  → C# Basics
Phase 2  → OOP
Phase 3  → Structs, Enums & Records
Phase 4  → Strings
Phase 5  → Arrays & Collections
Phase 6  → Generics
Phase 7  → Exception Handling
Phase 8  → Delegates & Lambdas
Phase 9  → Events
Phase 10 → LINQ
Phase 11 → Nullable Reference Types
Phase 12 → Memory Management
Phase 13 → Async Programming
Phase 14 → Multithreading & Concurrency
Phase 15 → Iterators
Phase 16 → Pattern Matching
Phase 17 → Tuples & Deconstruction
Phase 18 → Extension Methods
Phase 19 → Anonymous Types & Initializers
Phase 20 → Reflection
Phase 21 → Attributes
Phase 22 → Expression Trees
Phase 23 → Equality & Comparison
Phase 24 → Modern C#
Phase 25 → Advanced Memory & Performance
Phase 26 → Unsafe C#
Phase 27 → C# Compilation & Internals
Phase 28 → C# Coding Practices
Phase 29 → Design Patterns
Phase 30 → Interview Preparation
```

---

# Priority Guide

| Priority | Topics |
|---|---|
| 🔴 Must Master | Basics, OOP, Collections, Generics, Exceptions |
| 🔴 Must Master | Delegates, Lambdas, LINQ |
| 🔴 Must Master | Nullable, Memory, IDisposable |
| 🔴 Must Master | Async/Await, Tasks, Concurrency |
| 🟠 Strong Knowledge | Records, Pattern Matching, Iterators |
| 🟠 Strong Knowledge | Equality, Extension Methods, Tuples |
| 🟠 Strong Knowledge | Reflection, Attributes, Expression Trees |
| 🟡 Advanced | Span, Memory, ArrayPool, ValueTask |
| 🟡 Advanced | Unsafe, P/Invoke |
| 🟡 Important for Interviews | SOLID, Design Patterns |

---

# How to Study Each Topic

For every topic, don't just memorize the definition.

Use this sequence:

1. **What is it?**
2. **Why does C# have it?**
3. **Basic syntax**
4. **Simple example**
5. **Real-world example**
6. **How it works internally**
7. **Common mistakes**
8. **When to use it**
9. **When not to use it**
10. **Interview questions**
11. **Practice problems**
12. **Small coding exercise**

The goal is to be able to **write the code, explain the code, debug the code, and explain why you chose that approach**.

---

# C# Mastery Checklist

- [ ] C# Fundamentals
- [ ] OOP
- [ ] Structs / Enums / Records
- [ ] Strings
- [ ] Collections
- [ ] Generics
- [ ] Exceptions
- [ ] Delegates
- [ ] Lambdas
- [ ] Events
- [ ] LINQ
- [ ] Nullable Reference Types
- [ ] Memory Management
- [ ] Async/Await
- [ ] Multithreading
- [ ] Iterators
- [ ] Pattern Matching
- [ ] Tuples
- [ ] Extension Methods
- [ ] Reflection
- [ ] Attributes
- [ ] Expression Trees
- [ ] Equality & Comparison
- [ ] Modern C#
- [ ] Performance
- [ ] Unsafe C#
- [ ] C# Internals
- [ ] Coding Practices
- [ ] Design Patterns
- [ ] Interview Preparation
