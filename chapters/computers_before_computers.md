You are a computer. No, I'm not joking, you actually are. You compute stuff, you calculate stuff in your head, and hence, by the early definition of a computer, you are one. In the modern day, the device you are reading this on is a computer of sorts, but if you scroll back several decades, humans were referred to as computers. The word literally was defined as *"the one who computes"*. Teams of people, usually female, were given the task to perform long, tedious numerical calculations parallelly for mathematicians and physicists, while they focused on the remaining "important math".

## Eras Bygone
A computer that we refer to today is called a "Turing machine", whose concept was made by the renowned mathematician, [Alan Turing](https://en.wikipedia.org/wiki/Alan_Turing) (who is also the creator of the Turing Test). In principle, the way it worked is pretty much the same way that your computer today works. The [first physical Turing machine](https://en.wikipedia.org/wiki/Bombe) was created in 1940 to crack Enigma codes quickly, which was an encryption algorithm used by the Germans that had its encryption cipher key changed every night (Refer to Chapter X to learn more about encryption). All computers today are considered to be "Turing complete", as they can do the same things that a Turing machine could, with the exception of having infinite memory. 

> <tip>More depth to this is well beyond the scope of this topic, but for your own research, search about the [Turing Halting Problem](https://en.wikipedia.org/wiki/Halting_problem) and [Gödel's Incompleteness Theorems](https://en.wikipedia.org/wiki/G%C3%B6del%27s_incompleteness_theorems).</tip>

[IMAGE OF THE BOMBE]

For a couple decades, computers progressed slowly. They were basically used as extra-large calculators (hence, due to reasons mentioned above, were named computers). Most computers were fed instructions using physical tape! Things evolved slowly and gradually, adding secondary storage, for example hard drives, into the mix. Architectures got more complex, and more complex circuits were made to perform multiple tasks through single instructions (called [Instruction Sets](https://en.wikipedia.org/wiki/Instruction_set_architecture), see Chapter 2)

Nearly a decade after the concept of a Turing Machine was invented, another mathematician, [John von Neumann](https://en.wikipedia.org/wiki/John_von_Neumann), created the basic architecture of the logic of computers as we know them today. This is called the [von Neumann architecture](https://en.wikipedia.org/wiki/Von_Neumann_architecture), based on the [stored-program computer](https://en.wikipedia.org/wiki/Stored-program_computer) concept. All computers today are based on the same concept.

## Fundamentals

In short, the von Neumann architecture consists of a main memory, a Central Processing Unit (CPU) and an input/output system. The CPU consists of a Control Unit (CU), an Arithmetic/Logic Unit (ALU) and registers (modern CPUs have many **cores** with a set of these components each). Buses are wires that link different components within and outside the CPU to each other, and allow information to travel between components, hence the name.

> <dyk> There were many scientists and mathematicians that brought forth mostly theoretical advancements little by little over the last few centuries that laid the foundation for what a computer could possibly do and how it would supposedly work, but the John von Neumann and Alan Turing were by far the most influential. If you want to learn more about the pioneers of computer science, [click here](https://en.wikipedia.org/wiki/List_of_pioneers_in_computer_science).</dyk>

Just for context, the components mentioned above are as follows:

1. Control Unit (CU): The component in the CPU that sends signals to other components and circuits telling them how to function.
2. Arithmetic/Logic Unit (ALU): The component in the CPU that performs all the calculations and *binary shifts* in the computer.
3. Registers: Miniscule amounts of memory on the CPU itself that holds data specific to the current operations (not to be confused with CPU cache).

Fundamentally, all computers use the components listed above. The components are run by individual instructions that dictate what each component has to do.

The main memory consists of two parts:

1. **Read-Only Memory (ROM):** Memory that can only be read from by the computer. It contains the start-up sequence of the computer as to how the computer should *boot* up (which is hence called the *bootstrap*). It is made using flash storage and can only be written to once by the manufacturer. It is *non-volatile* memory, which means it does not get cleared when the computer shuts down.
2. **Random Access Memory (RAM):** Memory that can be read and written to by the computer virtually infinite times. It stores all the instructions that a computer has to execute and the data to manipulate. It uses [capacitors](https://en.wikipedia.org/wiki/Capacitor) and electrical charges to store data and represent binary 1s and 0s. It, however, is *volatile* which means that once the computer shuts down, the memory gets cleared (since, logically, the *capacitors* lose their charge).

## Personal Computing
Since early Turing Machines, computers evolved slowly and gradually. You might already know that they would be fed instructions using physical tapes. However, due to the stored-program concept, machines turned towards storing applications in non-volatile storage (secondary storage) that could be pulled to the RAM by the computer to run the instructions of the program. Even after two decades of development, they shrunk from the size of rooms down to the sizes of multiple desks.

The breakthrough c ame with the formation of a commercially available [microprocessor](). It was a complete logic and control board on a single [integrated circuit (IC)](), made in 1971; the Intel 4004. It was a huge breakthrough for computing and is largely responsible for all advancements to computing since then.

[Kit computers](https://en.wikipedia.org/wiki/History_of_personal_computers) became popular in the early 1970s. That is, in fact, the time that Apple, or Apple Computers as it was called back then, was created: by the two Steves in a garage. Computers had advanced so much that personal computing was at the brink of taking off. Kit computers were basically [printed circuit boards (PCBs)](https://en.wikipedia.org/wiki/Printed_circuit_board) with traced copper lines, along with all the required ICs included in the package that just had to be soldered on in the correct way, and the computer had to be connected to its peripherals and a screen. It was fairly complicated for any non-enthusiast, so computers did not enter the mainstream yet.

Everything changed due to the "Trinity" in 1977. Three personal computers emerged in the market that are still widely regarded today: [TRS-80](https://en.wikipedia.org/wiki/TRS-80), [Apple II](https://en.wikipedia.org/wiki/Apple_II_%281977_computer%29) and [PET 2001](https://en.wikipedia.org/wiki/PET_2001), from the most popular to the least. These computers were what gave birth to personal computing en masse. These computers were so popular that they were still in production over a decade later, with many millions of units sold altogether.

Computers became a common tool for business applications, due to the introduction of spreadsheets and word processors. It sped up the efficiency of work by performing calculations and laying out dating automatically, and businesses started to heavily invest in computers. Consumers started to realize the benefits as well, as they could run programs for different personal tasks. Soon enough, there was an ever-increasing demand for computer hardware and software. Old and new companies alike struggled to make hardware and software that would make its way into many offices and homes, settling them on the podium where Apple already had a foothold.

## CLI vs GUI
When computers such as the Apple II started getting popular, they all ran using a [command line interface (CLI)](https://en.wikipedia.org/wiki/Command-line_interface), something that looks a lot like the seemingly scary terminal in your computer.

[Terminal screenshot]

It wasn't scary at all back in the '70s; in fact, there was no other common standard way to interact with the computer.

That is, until Xerox released the Alto: A computer with an operating system that used a [graphical user interface (GUI)](https://en.wikipedia.org/wiki/Graphical_user_interface) and a pointing device to select things on the screen rather than a keyboard. This device was the first computer mouse.

[xerox alto with mouse pic]

Other operating system manufacturers, including Microsoft and Apple, took note, and released their GUI based devices and software in the '80s, with their releases of [Microsoft Windows](https://en.wikipedia.org/wiki/Microsoft_Windows) and [Apple Mac OS](https://en.wikipedia.org/wiki/Classic_Mac_OS) respectively... and the rest was history...