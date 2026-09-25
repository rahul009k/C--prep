
# C# Complete Learning Roadmap

A structured roadmap for learning and revising **C# itself** — from fundamentals to advanced language features, performance, internals, and interview preparation.

> **Scope:** This roadmap focuses on C#. Topics such as ASP.NET Core, EF Core, Dapper, Azure, CQRS, and Clean Architecture are intentionally kept outside this roadmap.

---

<details>
<summary><strong>1. C# Basics</strong></summary>

<blockquote>


<details>
<summary><strong>1.1 Introduction</strong></summary>

- [📘 Revision notes](C%23/1.1-introduction-notes.md)
- [ ] What is C#
- [ ] C# and .NET
- [ ] CLR
- [ ] Compilation
- [ ] Managed code
- [ ] C# program structure
- [ ] Namespaces
- [ ] Comments

</details>

<details>
<summary><strong>1.2 Variables & Data Types</strong></summary>

- [📘 Revision notes](C%23/1.2-variables-and-data-types-notes.md)
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

</details>

<details>
<summary><strong>1.3 Type Conversion</strong></summary>

- [📘 Revision notes](C%23/1.3-type-conversion-notes.md)
- [ ] Implicit conversion
- [ ] Explicit conversion
- [ ] Casting
- [ ] `Convert`
- [ ] `Parse`
- [ ] `TryParse`
- [ ] `is`
- [ ] `as`

</details>

<details>
<summary><strong>1.4 Operators</strong></summary>

- [📘 Revision notes](C%23/1.4-operators-and-expressions-notes.md)
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

</details>

<details>
<summary><strong>1.5 Control Flow</strong></summary>

- [📘 Revision notes](C%23/1.5-control-flow-notes.md)
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

</details>

<details>
<summary><strong>1.6 Methods</strong></summary>

- [📘 Revision notes](C%23/1.6-methods-notes.md)
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

</details>
</blockquote>
</details>
<details>
<summary><strong>2. Object-Oriented Programming</strong></summary>

<blockquote>


<details>
<summary><strong>2.1 Classes & Objects</strong></summary>

- [📘 Revision notes](C%23/2.1-classes-and-objects-notes.md)
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

</details>

<details>
<summary><strong>2.2 Encapsulation</strong></summary>

- [📘 Revision notes](C%23/2.2-encapsulation-notes.md)
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

</details>

<details>
<summary><strong>2.3 Inheritance</strong></summary>

- [📘 Revision notes](C%23/2.3-inheritance-notes.md)
- [ ] Base class
- [ ] Derived class
- [ ] `virtual`
- [ ] `override`
- [ ] `new`
- [ ] Sealed classes
- [ ] Sealed methods
- [ ] Constructor inheritance

</details>

<details>
<summary><strong>2.4 Polymorphism</strong></summary>

- [ ] Compile-time polymorphism
- [ ] Runtime polymorphism
- [ ] Method overloading
- [ ] Method overriding
- [ ] Virtual dispatch
- [ ] Base-class references

</details>

<details>
<summary><strong>2.5 Abstraction</strong></summary>

- [ ] Abstract classes
- [ ] Abstract methods
- [ ] Interfaces
- [ ] Interface implementation
- [ ] Multiple interfaces
- [ ] Default interface methods

---

</details>
</blockquote>
</details>
<details>
<summary><strong>3. Structs, Enums & Records</strong></summary>

<blockquote>


<details>
<summary><strong>3.1 Structs</strong></summary>

- [ ] `struct`
- [ ] Struct vs class
- [ ] Value semantics
- [ ] Readonly structs
- [ ] `ref struct`

</details>

<details>
<summary><strong>3.2 Enums</strong></summary>

- [ ] Enum declaration
- [ ] Underlying types
- [ ] Casting
- [ ] Parsing enums
- [ ] `Enum.Parse`
- [ ] `Enum.TryParse`
- [ ] `[Flags]` enum

</details>

<details>
<summary><strong>3.3 Records</strong></summary>

- [ ] Record class
- [ ] Record struct
- [ ] Positional records
- [ ] Value equality
- [ ] `with`
- [ ] Immutability

---

</details>
</blockquote>
</details>
<details>
<summary><strong>4. Strings</strong></summary>

<blockquote>


<details>
<summary><strong>4.1 String Fundamentals</strong></summary>

- [ ] String
- [ ] String immutability
- [ ] String literals
- [ ] Escape characters
- [ ] Verbatim strings
- [ ] Interpolated strings
- [ ] Raw string literals

</details>

<details>
<summary><strong>4.2 String Operations</strong></summary>

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

</details>

<details>
<summary><strong>4.3 StringBuilder</strong></summary>

- [ ] `StringBuilder`
- [ ] `Append`
- [ ] `AppendLine`
- [ ] `Insert`
- [ ] `Remove`
- [ ] StringBuilder vs string

---

</details>
</blockquote>
</details>
<details>
<summary><strong>5. Arrays & Collections</strong></summary>

<blockquote>


<details>
<summary><strong>5.1 Arrays</strong></summary>

- [ ] One-dimensional arrays
- [ ] Multidimensional arrays
- [ ] Jagged arrays
- [ ] Array initialization
- [ ] Array methods

</details>

<details>
<summary><strong>5.2 List</strong></summary>

- [ ] `List<T>`
- [ ] Add/remove
- [ ] Insert
- [ ] Contains
- [ ] Find
- [ ] Sort
- [ ] Capacity vs Count

</details>

<details>
<summary><strong>5.3 Dictionary</strong></summary>

- [ ] `Dictionary<TKey,TValue>`
- [ ] Keys and values
- [ ] `TryGetValue`
- [ ] `ContainsKey`
- [ ] Dictionary performance

</details>

<details>
<summary><strong>5.4 Other Collections</strong></summary>

- [ ] `HashSet<T>`
- [ ] `Queue<T>`
- [ ] `Stack<T>`
- [ ] `LinkedList<T>`

</details>

<details>
<summary><strong>5.5 Collection Interfaces</strong></summary>

- [ ] `IEnumerable<T>`
- [ ] `ICollection<T>`
- [ ] `IList<T>`
- [ ] `IReadOnlyCollection<T>`
- [ ] `IReadOnlyList<T>`
- [ ] `IDictionary<TKey,TValue>`

---

</details>
</blockquote>
</details>
<details>
<summary><strong>6. Generics</strong></summary>

<blockquote>


<details>
<summary><strong>6.1 Generic Basics</strong></summary>

- [ ] Generic classes
- [ ] Generic methods
- [ ] Generic interfaces
- [ ] Generic delegates
- [ ] Type parameters
- [ ] Type inference

</details>

<details>
<summary><strong>6.2 Generic Constraints</strong></summary>

- [ ] `where T : class`
- [ ] `where T : struct`
- [ ] `where T : new()`
- [ ] Interface constraints
- [ ] Base-class constraints
- [ ] Multiple constraints

</details>

<details>
<summary><strong>6.3 Variance</strong></summary>

- [ ] Covariance
- [ ] Contravariance
- [ ] `in`
- [ ] `out`

---

</details>
</blockquote>
</details>
<details>
<summary><strong>7. Exception Handling</strong></summary>

<blockquote>


<details>
<summary><strong>7.1 Exception Basics</strong></summary>

- [ ] Exceptions
- [ ] `try`
- [ ] `catch`
- [ ] `finally`
- [ ] `throw`

</details>

<details>
<summary><strong>7.2 Exception Types</strong></summary>

- [ ] Built-in exceptions
- [ ] Exception hierarchy
- [ ] Custom exceptions
- [ ] Inner exceptions

</details>

<details>
<summary><strong>7.3 Advanced Exception Handling</strong></summary>

- [ ] Exception filters
- [ ] `throw` vs `throw ex`
- [ ] Multiple catch blocks
- [ ] Exception propagation
- [ ] When NOT to use exceptions

---

</details>
</blockquote>
</details>
<details>
<summary><strong>8. Delegates</strong></summary>

<blockquote>


<details>
<summary><strong>8.1 Delegate Basics</strong></summary>

- [ ] What is a delegate
- [ ] Declaring delegates
- [ ] Calling delegates
- [ ] Passing delegates
- [ ] Returning delegates
- [ ] Multicast delegates

</details>

<details>
<summary><strong>8.2 Built-in Delegates</strong></summary>

- [ ] `Action`
- [ ] `Func`
- [ ] `Predicate`

</details>

<details>
<summary><strong>8.3 Lambda Expressions</strong></summary>

- [ ] Lambda syntax
- [ ] Expression lambda
- [ ] Statement lambda
- [ ] Lambda parameters
- [ ] Closures

---

</details>
</blockquote>
</details>
<details>
<summary><strong>9. Events</strong></summary>

<blockquote>


<details>
<summary><strong>9.1 Events</strong></summary>

- [ ] What is an event
- [ ] Event declaration
- [ ] Event publisher
- [ ] Event subscriber
- [ ] `EventHandler`
- [ ] Custom event arguments

</details>

<details>
<summary><strong>9.2 Events vs Delegates</strong></summary>

- [ ] Delegate vs event
- [ ] Why events exist
- [ ] Encapsulation of events

---

</details>
</blockquote>
</details>
<details>
<summary><strong>10. LINQ</strong></summary>

<blockquote>


<details>
<summary><strong>10.1 LINQ Fundamentals</strong></summary>

- [ ] What is LINQ
- [ ] Query syntax
- [ ] Method syntax
- [ ] Extension methods
- [ ] Deferred execution
- [ ] Immediate execution

</details>

<details>
<summary><strong>10.2 Filtering</strong></summary>

- [ ] `Where`
- [ ] `OfType`

</details>

<details>
<summary><strong>10.3 Projection</strong></summary>

- [ ] `Select`
- [ ] `SelectMany`

</details>

<details>
<summary><strong>10.4 Sorting</strong></summary>

- [ ] `OrderBy`
- [ ] `OrderByDescending`
- [ ] `ThenBy`
- [ ] `ThenByDescending`

</details>

<details>
<summary><strong>10.5 Aggregation</strong></summary>

- [ ] `Count`
- [ ] `LongCount`
- [ ] `Sum`
- [ ] `Average`
- [ ] `Min`
- [ ] `Max`
- [ ] `Aggregate`

</details>

<details>
<summary><strong>10.6 Element Operators</strong></summary>

- [ ] `First`
- [ ] `FirstOrDefault`
- [ ] `Single`
- [ ] `SingleOrDefault`
- [ ] `Last`
- [ ] `LastOrDefault`
- [ ] `ElementAt`
- [ ] `ElementAtOrDefault`

</details>

<details>
<summary><strong>10.7 Set Operators</strong></summary>

- [ ] `Distinct`
- [ ] `Union`
- [ ] `Intersect`
- [ ] `Except`

</details>

<details>
<summary><strong>10.8 Grouping & Joining</strong></summary>

- [ ] `GroupBy`
- [ ] `Join`
- [ ] `GroupJoin`
- [ ] `ToLookup`

</details>

<details>
<summary><strong>10.9 LINQ Internals</strong></summary>

- [ ] `IEnumerable`
- [ ] `IEnumerator`
- [ ] Deferred execution
- [ ] Multiple enumeration
- [ ] `ToList`
- [ ] `ToArray`
- [ ] LINQ performance

---

</details>
</blockquote>
</details>
<details>
<summary><strong>11. Nullable Reference Types</strong></summary>

<blockquote>


<details>
<summary><strong>11.1 Nullable Concepts</strong></summary>

- [ ] Nullable value types
- [ ] Nullable reference types
- [ ] `?`
- [ ] `null`

</details>

<details>
<summary><strong>11.2 Null Handling</strong></summary>

- [ ] Null checks
- [ ] `??`
- [ ] `??=`
- [ ] `?.`
- [ ] `!`
- [ ] Pattern matching with null

</details>

<details>
<summary><strong>11.3 Nullable Analysis</strong></summary>

- [ ] Compiler nullable warnings
- [ ] Nullable annotations
- [ ] Null-state analysis

---

</details>
</blockquote>
</details>
<details>
<summary><strong>12. Memory Management</strong></summary>

<blockquote>


<details>
<summary><strong>12.1 Memory Fundamentals</strong></summary>

- [ ] Stack
- [ ] Heap
- [ ] Value types
- [ ] Reference types
- [ ] Boxing
- [ ] Unboxing

</details>

<details>
<summary><strong>12.2 Garbage Collection</strong></summary>

- [ ] GC
- [ ] Managed memory
- [ ] Generations
- [ ] Gen 0
- [ ] Gen 1
- [ ] Gen 2
- [ ] Large Object Heap
- [ ] Finalization

</details>

<details>
<summary><strong>12.3 IDisposable</strong></summary>

- [ ] `IDisposable`
- [ ] `Dispose`
- [ ] `using`
- [ ] `using` declaration
- [ ] `IAsyncDisposable`
- [ ] `await using`

---

</details>
</blockquote>
</details>
<details>
<summary><strong>13. Async Programming</strong></summary>

<blockquote>


<details>
<summary><strong>13.1 Task-Based Programming</strong></summary>

- [ ] `Task`
- [ ] `Task<T>`
- [ ] `async`
- [ ] `await`
- [ ] Async methods

</details>

<details>
<summary><strong>13.2 Task Operations</strong></summary>

- [ ] `Task.WhenAll`
- [ ] `Task.WhenAny`
- [ ] `Task.Delay`
- [ ] `Task.Run`

</details>

<details>
<summary><strong>13.3 Cancellation</strong></summary>

- [ ] `CancellationToken`
- [ ] `CancellationTokenSource`
- [ ] Cancellation patterns

</details>

<details>
<summary><strong>13.4 Common Problems</strong></summary>

- [ ] `.Result`
- [ ] `.Wait()`
- [ ] Deadlocks
- [ ] Blocking async code
- [ ] Fire-and-forget
- [ ] `async void`

---

</details>
</blockquote>
</details>
<details>
<summary><strong>14. Multithreading & Concurrency</strong></summary>

<blockquote>


<details>
<summary><strong>14.1 Threads</strong></summary>

- [ ] `Thread`
- [ ] ThreadPool
- [ ] Tasks vs Threads

</details>

<details>
<summary><strong>14.2 Synchronization</strong></summary>

- [ ] `lock`
- [ ] `Monitor`
- [ ] `Mutex`
- [ ] `Semaphore`
- [ ] `SemaphoreSlim`
- [ ] `Interlocked`

</details>

<details>
<summary><strong>14.3 Thread-Safe Collections</strong></summary>

- [ ] `ConcurrentDictionary`
- [ ] `ConcurrentQueue`
- [ ] `ConcurrentBag`
- [ ] `ConcurrentStack`

</details>

<details>
<summary><strong>14.4 Concurrency Problems</strong></summary>

- [ ] Race conditions
- [ ] Deadlocks
- [ ] Thread safety
- [ ] Shared state

---

</details>
</blockquote>
</details>
<details>
<summary><strong>15. Iterators</strong></summary>

<blockquote>


<details>
<summary><strong>15.1 Iterator Fundamentals</strong></summary>

- [ ] `IEnumerable`
- [ ] `IEnumerator`
- [ ] `yield return`
- [ ] `yield break`

</details>

<details>
<summary><strong>15.2 Deferred Iteration</strong></summary>

- [ ] Lazy execution
- [ ] Iterator state
- [ ] Iterator performance

---

</details>
</blockquote>
</details>
<details>
<summary><strong>16. Pattern Matching</strong></summary>

<blockquote>


<details>
<summary><strong>16.1 Type Patterns</strong></summary>

- [ ] `is`
- [ ] Type pattern
- [ ] Declaration pattern

</details>

<details>
<summary><strong>16.2 Property Patterns</strong></summary>

- [ ] Property pattern
- [ ] Nested property pattern

</details>

<details>
<summary><strong>16.3 Relational Patterns</strong></summary>

- [ ] `<`
- [ ] `>`
- [ ] `<=`
- [ ] `>=`

</details>

<details>
<summary><strong>16.4 Logical Patterns</strong></summary>

- [ ] `and`
- [ ] `or`
- [ ] `not`

</details>

<details>
<summary><strong>16.5 List Patterns</strong></summary>

- [ ] List patterns
- [ ] Slice patterns

</details>

<details>
<summary><strong>16.6 Switch Expressions</strong></summary>

- [ ] Switch expressions
- [ ] Exhaustiveness
- [ ] Pattern-based switching

---

</details>
</blockquote>
</details>
<details>
<summary><strong>17. Tuples & Deconstruction</strong></summary>

<blockquote>


<details>
<summary><strong>17.1 Tuples</strong></summary>

- [ ] ValueTuple
- [ ] Named tuples
- [ ] Tuple return values

</details>

<details>
<summary><strong>17.2 Deconstruction</strong></summary>

- [ ] Tuple deconstruction
- [ ] Object deconstruction
- [ ] Custom `Deconstruct`

---

</details>
</blockquote>
</details>
<details>
<summary><strong>18. Extension Methods</strong></summary>

<blockquote>


<details>
<summary><strong>18.1 Extension Methods</strong></summary>

- [ ] Creating extension methods
- [ ] `this` parameter
- [ ] Extension method rules
- [ ] Extension method resolution

</details>

<details>
<summary><strong>18.2 Practical Usage</strong></summary>

- [ ] LINQ-style extensions
- [ ] Fluent APIs

---

</details>
</blockquote>
</details>
<details>
<summary><strong>19. Anonymous Types & Object Initialization</strong></summary>

<blockquote>


<details>
<summary><strong>19.1 Anonymous Types</strong></summary>

- [ ] Anonymous objects
- [ ] Read-only properties
- [ ] `var`

</details>

<details>
<summary><strong>19.2 Initializers</strong></summary>

- [ ] Object initializer
- [ ] Collection initializer
- [ ] Index initializers
- [ ] Collection expressions

---

</details>
</blockquote>
</details>
<details>
<summary><strong>20. Reflection</strong></summary>

<blockquote>


<details>
<summary><strong>20.1 Reflection Basics</strong></summary>

- [ ] `Type`
- [ ] `typeof`
- [ ] `GetType`
- [ ] Assemblies
- [ ] Types
- [ ] Methods
- [ ] Properties
- [ ] Fields

</details>

<details>
<summary><strong>20.2 Dynamic Reflection</strong></summary>

- [ ] Creating objects
- [ ] Invoking methods
- [ ] Reading properties
- [ ] Setting properties

---

</details>
</blockquote>
</details>
<details>
<summary><strong>21. Attributes</strong></summary>

<blockquote>


<details>
<summary><strong>21.1 Built-in Attributes</strong></summary>

- [ ] `[Obsolete]`
- [ ] `[Serializable]`
- [ ] `[Flags]`
- [ ] `[CallerMemberName]`

</details>

<details>
<summary><strong>21.2 Custom Attributes</strong></summary>

- [ ] Creating attributes
- [ ] Attribute parameters
- [ ] Reading attributes
- [ ] Attributes + reflection

---

</details>
</blockquote>
</details>
<details>
<summary><strong>22. Expression Trees</strong></summary>

<blockquote>


<details>
<summary><strong>22.1 Basics</strong></summary>

- [ ] Expression trees
- [ ] `Expression<TDelegate>`
- [ ] Lambda vs expression tree

</details>

<details>
<summary><strong>22.2 Building Expressions</strong></summary>

- [ ] Expression parameters
- [ ] Expression properties
- [ ] Expression calls
- [ ] Expression composition

</details>

<details>
<summary><strong>22.3 Practical Usage</strong></summary>

- [ ] Dynamic queries
- [ ] LINQ providers
- [ ] Runtime query construction

---

</details>
</blockquote>
</details>
<details>
<summary><strong>23. Equality & Comparison</strong></summary>

<blockquote>


<details>
<summary><strong>23.1 Equality</strong></summary>

- [ ] `==`
- [ ] `Equals`
- [ ] `ReferenceEquals`
- [ ] Value equality
- [ ] Reference equality

</details>

<details>
<summary><strong>23.2 Equality Contracts</strong></summary>

- [ ] `IEquatable<T>`
- [ ] `GetHashCode`
- [ ] Overriding equality

</details>

<details>
<summary><strong>23.3 Comparison</strong></summary>

- [ ] `IComparable<T>`
- [ ] `IComparer<T>`
- [ ] Custom sorting

---

</details>
</blockquote>
</details>
<details>
<summary><strong>24. Modern C#</strong></summary>

<blockquote>


<details>
<summary><strong>24.1 Modern Syntax</strong></summary>

- [ ] File-scoped namespaces
- [ ] Global using
- [ ] Target-typed `new`
- [ ] `init`
- [ ] `required`
- [ ] Raw string literals
- [ ] Collection expressions
- [ ] Primary constructors

</details>

<details>
<summary><strong>24.2 Modern Type Features</strong></summary>

- [ ] Records
- [ ] Record structs
- [ ] `with`
- [ ] Pattern matching
- [ ] Nullable reference types

---

</details>
</blockquote>
</details>
<details>
<summary><strong>25. Advanced Memory & Performance</strong></summary>

<blockquote>


<details>
<summary><strong>25.1 Stack-Based Memory</strong></summary>

- [ ] `Span<T>`
- [ ] `ReadOnlySpan<T>`
- [ ] `Memory<T>`
- [ ] `ReadOnlyMemory<T>`

</details>

<details>
<summary><strong>25.2 Allocation Optimization</strong></summary>

- [ ] Boxing avoidance
- [ ] `ArrayPool<T>`
- [ ] `ValueTask`
- [ ] Struct performance
- [ ] String allocations

</details>

<details>
<summary><strong>25.3 Performance Concepts</strong></summary>

- [ ] Allocation
- [ ] GC pressure
- [ ] CPU-bound work
- [ ] I/O-bound work
- [ ] Benchmarking basics

---

</details>
</blockquote>
</details>
<details>
<summary><strong>26. Unsafe C#</strong></summary>

<blockquote>


<details>
<summary><strong>26.1 Unsafe Basics</strong></summary>

- [ ] `unsafe`
- [ ] Pointers
- [ ] Pointer arithmetic
- [ ] `fixed`

</details>

<details>
<summary><strong>26.2 Interop</strong></summary>

- [ ] Managed vs unmanaged code
- [ ] P/Invoke
- [ ] `Marshal`

> **Priority:** Lower priority for normal backend development, but useful to understand when working close to the runtime or native code.

---

</details>
</blockquote>
</details>
<details>
<summary><strong>27. C# Compilation & Internals</strong></summary>

<blockquote>


<details>
<summary><strong>27.1 Compilation</strong></summary>

- [ ] Source code
- [ ] Roslyn compiler
- [ ] IL
- [ ] Assembly
- [ ] JIT
- [ ] Native machine code

</details>

<details>
<summary><strong>27.2 Runtime</strong></summary>

- [ ] CLR
- [ ] Metadata
- [ ] Assemblies
- [ ] Type system
- [ ] Garbage collection

</details>

<details>
<summary><strong>27.3 Async Internals</strong></summary>

- [ ] State machines
- [ ] `async` transformation
- [ ] `await` internals

---

</details>
</blockquote>
</details>
<details>
<summary><strong>28. C# Coding Practices</strong></summary>

<blockquote>


<details>
<summary><strong>28.1 Clean C# Code</strong></summary>

- [ ] Naming conventions
- [ ] Method design
- [ ] Class design
- [ ] Immutability
- [ ] Guard clauses
- [ ] Null handling
- [ ] Avoiding duplication

</details>

<details>
<summary><strong>28.2 Common Mistakes</strong></summary>

- [ ] Overusing `var`
- [ ] Misusing `dynamic`
- [ ] Blocking async code
- [ ] Excessive LINQ
- [ ] Unnecessary allocations
- [ ] Incorrect exception handling
- [ ] Mutable shared state

</details>

<details>
<summary><strong>28.3 C# Design Principles</strong></summary>

- [ ] SOLID principles
- [ ] Composition over inheritance
- [ ] Encapsulation
- [ ] Separation of concerns
- [ ] Dependency inversion

---

</details>
</blockquote>
</details>
<details>
<summary><strong>29. Design Patterns in C#</strong></summary>

<blockquote>


<details>
<summary><strong>29.1 Creational</strong></summary>

- [ ] Singleton
- [ ] Factory
- [ ] Abstract Factory
- [ ] Builder
- [ ] Prototype

</details>

<details>
<summary><strong>29.2 Structural</strong></summary>

- [ ] Adapter
- [ ] Decorator
- [ ] Facade
- [ ] Proxy
- [ ] Composite

</details>

<details>
<summary><strong>29.3 Behavioral</strong></summary>

- [ ] Strategy
- [ ] Observer
- [ ] Command
- [ ] Chain of Responsibility
- [ ] Template Method
- [ ] Mediator
- [ ] Specification

---

</details>
</blockquote>
</details>
<details>
<summary><strong>30. C# Interview Preparation</strong></summary>

<blockquote>


<details>
<summary><strong>30.1 Fundamentals</strong></summary>

- [ ] Value vs reference type
- [ ] Stack vs heap
- [ ] `var` vs `dynamic`
- [ ] `ref` vs `out`
- [ ] `const` vs `readonly`
- [ ] Class vs struct
- [ ] Boxing/unboxing

</details>

<details>
<summary><strong>30.2 OOP</strong></summary>

- [ ] Encapsulation
- [ ] Inheritance
- [ ] Abstraction
- [ ] Polymorphism
- [ ] Abstract class vs interface
- [ ] Overloading vs overriding

</details>

<details>
<summary><strong>30.3 Collections</strong></summary>

- [ ] Array vs List
- [ ] List vs LinkedList
- [ ] Dictionary internals
- [ ] HashSet
- [ ] IEnumerable

</details>

<details>
<summary><strong>30.4 LINQ</strong></summary>

- [ ] Deferred execution
- [ ] `IEnumerable` vs `IQueryable`
- [ ] `First` vs `Single`
- [ ] `Select` vs `SelectMany`
- [ ] `GroupBy`
- [ ] Joins

</details>

<details>
<summary><strong>30.5 Async</strong></summary>

- [ ] `async/await`
- [ ] Task
- [ ] Thread vs Task
- [ ] `Task.Run`
- [ ] `Task.WhenAll`
- [ ] `CancellationToken`
- [ ] Deadlocks

</details>

<details>
<summary><strong>30.6 Advanced</strong></summary>

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

</details>
</blockquote>
</details>

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
