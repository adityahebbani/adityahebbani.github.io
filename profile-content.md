# Aditya Hebbani

**Computer Engineering (Purdue University)** — embedded systems, verification, and performance-focused systems work.

- **Portfolio:** https://adityahebbani.github.io
- **Email:** adityahebbani@outlook.com
- **Phone:** +1 (813) 450-4735
- **Work authorization:** US Citizen

## About
I’m a computer engineering student at Purdue University with hands-on experience spanning embedded systems, industrial automation, chip verification, and research in GPU/microarchitecture and robotics perception. I enjoy building systems where correctness and performance matter—whether that’s interrupt-safe embedded telemetry on an STM32, constrained-random verification for CPU subsystems, or end-to-end robotics pipelines that need stable frame rates and predictable latency.

My work often sits at the boundary between hardware and software: I’m comfortable bringing up boards and sensors, writing low-level drivers, debugging with the right tooling, and validating behavior under stress. I also like designing test strategy early—instrumentation, benchmarks, and “known-bad” cases—so systems fail loudly and predictably rather than mysteriously.

## Focus Areas
- **Embedded + real-time systems:** microcontrollers, sensor integration, interrupt-safe data paths, buffered telemetry
- **Verification + bring-up:** UVM, constrained-random, timing closure awareness, silicon test concepts (ATPG, wafer-level)
- **Systems performance:** Linux services, profiling/debugging, sockets/IPC, bounded-latency pipelines
- **Robotics + perception:** ROS integration, vision models, practical deployment considerations

## Education
**Purdue University (West Lafayette, IN)**
- **M.S. Computer Engineering** (Aug 2026 — May 2027)
- **B.S. Computer Engineering** (Aug 2022 — May 2026)

Selected coursework/topics: Computer Architecture, ASIC Design, Digital Systems, Artificial Intelligence, Computer Vision, Data Structures, Object-Oriented Programming (C++), Networks.

## Experience
### Kimberly-Clark — Electrical Engineering Intern (Jan 2025 — Aug 2025)
I worked on embedded and industrial automation projects with a strong emphasis on reliability in production environments. The common thread across my work was bridging plant-floor constraints (noise, harsh conditions, long runtimes, and strict uptime requirements) with engineering practices that make systems observable, testable, and maintainable.

**Embedded telemetry + board bring-up**
- Designed and built an **STM32-based PCB** for multi-sensor telemetry.
- Implemented embedded drivers with **interrupt-safe data paths**, focusing on predictable behavior under load and graceful handling of edge cases.
- Built buffered acquisition/telemetry flows so sensor reads and network/IO activities don’t interfere with timing-critical collection.

**Industrial control + quality tooling**
- Implemented **Rockwell/Allen-Bradley PLC ladder logic** to improve reliability and operational consistency.
- Supported vision-based quality control workflows, focusing on robustness and deployability rather than “demo-only” accuracy.

**Service deployment at scale (12 mills)**
- Deployed **Linux/Flask services across 12 mills**, integrating TCP sockets and Ethernet/IP devices.
- Wrote scripts to validate **connectivity, latency, and memory/performance**, making it easier to diagnose issues quickly and prevent regressions.
- Emphasized operational tooling (sanity checks, repeatable setup, and clear failure modes) so deployments were easier to support.

### Teradyne — Chip Verification Program (Aug 2024 — May 2025)
I focused on verification methodology and test strategy around CPU-scale digital systems—turning ambiguous “it should work” requirements into repeatable tests, measurable coverage, and actionable debug artifacts.

**Functional verification + tapeout support**
- Verified and supported tapeout of a **quad-core 130 nm CPU** using **Teradyne Ultraflex**, validating functional correctness and timing closure readiness.
- Approached verification like a product: reliable regressions, clear pass/fail signals, and fast triage when something breaks.

**Test strategy and manufacturability awareness**
- Applied **ATPG** and **wafer-level testing** concepts to validate high-speed subsystems and increase pre-production confidence.
- Considered testability and observability early—thinking about what needs to be measured, what’s hard to probe, and how to de-risk bring-up.

**UVM + constrained-random infrastructure**
- Developed a **UVM environment** and constrained-random testbenches for core-level and cache subsystems.
- Built the pieces that make random verification effective (stimulus strategy, monitors/scoreboards, and assertions/coverage), and used debug tooling to root-cause failures.

### Algonomy — AI Systems Engineering Intern (Jun 2024 — Aug 2024)
I worked on applied ML/analytics projects where the goal wasn’t just “a model,” but a usable workflow that stakeholders could trust.

- Led a team of five interns to design **predictive demand models** and build **interactive analytics tools**.
- Focused on building an end-to-end loop: framing the problem, validating assumptions, iterating on features/approaches, and presenting results clearly.
- Emphasized evaluation discipline (baselines, sanity checks, and interpretable views) so results were easier to validate and improve.

### Purdue ECE 437 (Computer Prototyping) — Undergraduate Teaching Assistant (Jan 2026 — May 2026)
I helped students succeed in a fast-paced prototyping course by making debugging and design iteration less intimidating and more systematic.

- Assisted with instruction and lab support, including grading and feedback.
- Guided students through processor design concepts and practical debugging workflows in **QuestaSim**.
- Helped students develop habits that translate to real engineering work: isolating failures, constructing minimal repro cases, and validating fixes with targeted tests.

## Research
### SoCET — GPU RTL Design / Compiler / UVM / PCB & Chipset Team (Aug 2024 — Present)
I contribute across the stack—from architecture/RTL concepts to evaluation methodology—where success is measured by correctness, performance trends, and the ability to explain trade-offs clearly.

**GPU backend and evaluation**
- Contributed to GPU backend components (e.g., **warp scheduler, T-cache, SIMD**) and wrote CUDA kernels / PTX tests to study coalescing and divergence behavior.
- Built targeted micro-benchmarks to validate whether design changes moved the needle for the workloads they were intended to help.

**Compiler collaboration**
- Collaborated with the compiler team on **loop optimizations and autovectorization**, and evaluated results via custom simulation and micro-benchmarks.
- Focused on feedback loops: turning benchmark results into concrete next steps rather than one-off experiments.

**Simulation and modeling**
- Built a **Python GPU emulator** modeling SIMT execution, memory hierarchies, and warp scheduling.
- Used the emulator to reason about latency vs. throughput trade-offs and to validate intuition before investing in more expensive implementation paths.

### Collaborative Research Lab — Ultrasound Image Segmentation Lead (Sep 2023 — Present)
I lead a robotics-adjacent perception effort where model accuracy matters, but so do the practicalities of data, iteration speed, and integration into a working system.

**Model development**
- Led ultrasound segmentation research and developed a **Transformer–UNet** model with substantially improved accuracy.
- Prioritized robust evaluation and iterative improvements instead of overfitting to a single dataset snapshot.

**Data and tooling**
- Curated **2,000+ annotated images** and built supporting tooling to make dataset iteration repeatable and less error-prone.
- Treated data quality as a first-class engineering problem (consistent labels, clear conventions, and reproducible preprocessing).

**Robotics integration (ROS)**
- Integrated **ROS** on a Sawyer robot for anatomy-guided probe control.
- Connected model outputs to robot behavior, focusing on end-to-end reliability and clear interfaces between perception and control.

## Projects
### RISC-V CPU Design (Aug 2025 — Present)
- Implemented a **dual-core pipeline** with cache coherence; exploring superscalar out-of-order directions using **Tomasulo**-style scheduling and a **ROB**.
- Built stress tests using pthreads/atomics to validate **bounded-latency behavior** and exercise microarchitectural hazards.

### Maverick Micro Aerial Vehicles — Co-Founder & Software Lead (Feb 2025 — Present)
- Led autonomy and vision; built UART drivers, a sensor PCB, and a low-latency **UDP/GStreamer** pipeline on a Jetson Nano.
- Integrated redundant obstacle avoidance and multi-camera 3D mapping, tuned toward deterministic performance and robust operation.

### Purdue Aerial Robotics Team — Guidance & Navigation Lead (Aug 2022 — Present)
- Designed custom PCBs in Altium integrating avionics with VTOL control; wrote microcode for high-bandwidth peripheral I/O.
- Implemented transformer-based vision and path planning with ROS pipelines and multithreaded nodes to maintain a stable frame rate.

### Other work (selected)
Face ID for KeePass • SLM chatbot + translator • Cloud compute smart glasses • Trivia game with STM32 • AHB-Lite USB 1.1 ASIC for bulk transfers • Fine-tuned LLM personal assistant • GPGPU research prototypes

## Skills
**Languages:** C, C++, Python, Rust, SystemVerilog, VHDL, Chisel, CUDA, TCL, SQL, Assembly (ARM, RISC-V)

**Verification / EDA:** UVM, constrained-random; Synopsys, Cadence (Innovus); QuestaSim, Verilator

**FPGA & Hardware:** AMD Vivado, Altera Quartus; PCB design (Altium, Eagle); lab tools (oscilloscopes, multimeters)

**Systems:** Linux/Unix, Git, Docker; gdb, perf, valgrind, asan/tsan; sockets; IPC (shm/mmap, ring buffers)

**Modeling / ML:** gem5, CACTI, NVSim, MATLAB; PyTorch, TensorFlow, NumPy, Pandas, SciPy, ONNX

---

If you want a shorter version for the homepage hero, I can also produce a ~2–3 sentence “bio” and a 1-line headline from this.
