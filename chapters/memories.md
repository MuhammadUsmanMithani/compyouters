The reason you can read this text right now is because your phone or computer was able to load it... ***Load it***, you say? Where does it load to, you may ask?

Well, as I talked about in [Chapter 1], a computer consists of two types of memories.
> For a quick reminder:
> **Random Access Memory (RAM):** Very fast volatile memory that stores instructions and data that can directly be accessed by the CPU. It can be read and written to simultaneously.
> **Read-Only Memory (ROM):** Non-volatile flash memory that can traditionally only be read from. It stores the startup instructions for the device.


The RAM stores the data and instructions of the program that are being executed at any point in time. Everything is loaded up into the RAM from the hard disk before it can be executed according to the stored-program concept.

Because it is "random access", it is faster than traditional storage. It's called random access because the data can be quickly read and modified in any order, rather than having to be read and modified sequentially like in optical and physical media. Read more in [Chapter X]
                                                                                 
There are two types of RAMs, dynamic RAM and static RAM.

## Dynamic vs Static
By the sound of it, you may think "moving vs. not moving RAM". But RAM doesn't move.

[Static RAM (SRAM)](https://en.wikipedia.org/wiki/Static_random-access_memory) is made using flip-flop circuitry, that can hold data as long as power is being provided to each circuit. Using flip-flops is quite expensive as they have to be made with many transistors for each memory block. [Dynamic RAM (DRAM)](https://en.wikipedia.org/wiki/Dynamic_random-access_memory), meanwhile, uses capacitors to store charges that depict 1s and 0s. Instead of being powered constantly, the state of each capacitor has to rather be refreshed at microsecond intervals, or otherwise the capacitors may leak charge and lose all the data in them. The computer must still be provided constant power to allow DRAM to maintain its states.

DRAM chips are much cheaper to produce and use lesser power since they only have to be refreshed. However, they are slower than SRAMs, but DRAM chips are already fast enough that it does not matter to the vast majority of the consumers. That is why DRAM is the choice of [RAM sticks](https://en.wikipedia.org/wiki/DIMM) or soldered RAM used in possibly all computers you see today.

[DRAM stick picture]

> <note>[SDRAM](https://en.wikipedia.org/wiki/Synchronous_dynamic_random-access_memory) does not stand for a mix of both technologies. It is a different technology built on top of DRAM but is out of the scope of this chapter.</note>

However, that is not to say that SRAM is not used in computers at all. Every processor released in the last couple decades had had something called [CPU cache](https://en.wikipedia.org/wiki/CPU_cache). While normal RAM is extremely fast, it is still very slow in comparison to the clock speeds of a CPU for a fetch-decode-execute cycle. Transferring data for each instruction over relatively long wires can waste many cycles, and so every CPU has small amounts of extremely fast memory within the silicon die connected with very short traces to the other components. This is called CPU cache and is in very small amounts compared to your RAM but is many magnitudes faster. It plays a very crucial role in the performance of a system, given that it is utilized effectively. It stores a lot of the quick access data that needs to be read and modified very quickly or will be accessed by the CPU at a certain time, or the data that is frequently being accessed by the CPU. It reduces access times by a lot, which reduces the CPU latency and can hence speed up programs significantly.

> <dyk> CPUs have a dedicated hardware unit called a [branch prediction unit](https://en.wikipedia.org/wiki/Branch_predictor) (BPU) that can predict which branch will be chosen with high confidence based on the current encoded instruction. Branch prediction is a statistical technique that helps CPUs avoid performance stalls by guessing the outcome of a conditional branch before the condition is evaluated. This allows the processor to fetch and execute instructions from the predicted path in advance, saving time if the prediction is correct. The data for the predicted branch is loaded up into cache memory before the processor evaluates the branches. so that it may execute the instructions faster with lesser fetch latency. </dyk>

There are three levels of CPU cache, in increasing order of memory size and latency: Level 1, Level 2 and Level 3 (called L1, L2 and L3). Some CPUs even have an L4 cache, but it's uncommon. All this cache uses SRAM technology due to the higher speeds. That is why chips with higher capacity CPU cache are significantly more expensive.

## Read-Only
When you start up a computer, you usually see a splash screen with the motherboard manufacturer's logo appearing for a brief moment at the start. A famous motherboard splash screen is of [American Megatrends](https://en.wikipedia.org/wiki/American_Megatrends).

[Computer splash screen picture]

When the computer is powered on, it needs to perform some tasks before coming to a usable state. It needs check the hardware attached for faults, it needs to check if every component is being provided a stable voltage, it needs to set power profiles for certain components, it needs to talk to the attached peripherals, it needs to tell the CPU where the [bootloader](https://en.wikipedia.org/wiki/Bootloader) (the program that is responsible for checking and loading an operating system) is and how to launch it to boot the computer, etc. This is called the motherboard's [firmware](https://en.wikipedia.org/wiki/F'irmware) and the most common standard was formerly called the [basic input/output system (BIOS)](https://en.wikipedia.org/wiki/BIOS) but has mostly been replaced by the [unified extensible firmware interface (UEFI)](https://en.wikipedia.org/wiki/UEFI) which covers the features of BIOS and has many additional features of its own where BIOS lacked, such as using more modern architectures and the option to use a mouse.

> <tip> Many manufacturers may use UEFI firmware but will call an update to as a BIOS update, or a motherboard firmware update. In any case, it means to update your motherboard firmware, which is different than a firmware update for other hardware devices. </tip>

This BIOS/UEFI firmware is stored within a ROM chip on the motherboard. This chip can only be read from, and not traditionally written to, but it is non-volatile storage, which means that it does not lose data once powered off. Any of the settings you can set in the BIOS or UEFI screens, such as power profiles for your CPU and RAM, are stored in a small amount of memory in the computer that is powered by a tiny separate battery in the computer. This memory is called the [complementary metal-oxide semiconductor (CMOS)](https://en.wikipedia.org/wiki/CMOS). Removing or replacing the CMOS battery will reset all of your settings to their factory conditions.

Hardware devices like graphics cards and peripherals like computer mice have their own firmware in their own ROM chips that initialize to be able to communicate with the computer during the startup process.

While traditional ROM chips were only readable and could only be set during the manufacturing process, in the last decades, different types of ROMs have started getting popular as they can also be programmed or reprogrammed.

They are:
1. [Programmable Read-Only Memory (PROM):](https://en.wikipedia.org/wiki/Programmable_ROM) PROM chips can be manufactured by an outsourced company and then flashed by the motherboard manufacturer with the correct firmware during installation of the chip. However, it cannot be reprogrammed once flashed.
2. [Erasable Programmable Read-Only Memory (EPROM):](https://en.wikipedia.org/wiki/EPROM) EPROM can be reprogrammed multiple times. However, they need to be erased every time before being reprogrammed. To erase the chip, you need special equipment to be able to expose the silicon to direct UV-light and wait for a few minutes to allow it to clear completely. Once all sectors are erased, it can be re-flashed with the firmware.
3. [Electrically Erasable Programmable Read-Only Memory (EEPROM):](https://en.wikipedia.org/wiki/EEPROM) This is the most common type of ROM memory used. It can be erased bit by bit and reprogrammed through software and electric currents, which is why it is the most common type of ROM used in devices. This allows the firmware to be updated by the manufacturer by downloading and flashing the files on to the EEPROM chip, in the form of BIOS updates.

> <dyk> While updating the firmware, if the computer is unplugged or the power goes out, the flash memory can get corrupted, and so the computer becomes unable to even boot to the flash screen, effectively making the motherboard paperweight. That is why many computers come with a backup ROM chip with a copy of the BIOS, so that if the main chip dies, the computer can load the startup instructions of the backup chip. The main ROM chip can then be re-flashed with the BIOS to bring it to a usable state again. </dyk>

ROM flash memory is still many magnitudes slower than RAM, and so EEPROM cannot be used as an alternative to that.

A common misconception is that your hard drive or solid-state storage is also ROM, or also a memory. It is not ROM since it is not used to be only read from, the term memory generally refers to primary memory, i.e. RAM and ROM, which the CPU can access directly. Hard drive or solid-state storage is classified under secondary memory, and removable storage media such as USB storage and optical storage such as CDs and DVDs come under tertiary storage. You can learn more about them in [Chapter X].