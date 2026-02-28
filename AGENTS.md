```markdown
# AGENTS.md - Guidelines for AI Coding Agents

These guidelines are designed to ensure the creation of high-quality, maintainable, and efficient AI coding agents.  Adherence to these principles is crucial for long-term success and stability of the repository.

## 1. DRY (Don't Repeat Yourself)

*   **Single Responsibility Principle:** Each agent should have a clearly defined and focused responsibility. Avoid creating multiple agents with overlapping functionality.
*   **Code Reuse:**  Design agents to be modular and reusable.  Break down complex logic into smaller, well-defined components.
*   **Abstraction:**  Use abstract classes or interfaces to define common behavior and reduce code duplication.

## 2. KISS (Keep It Simple, Stupid)

*   **Minimal Code:** Strive for the shortest possible implementation that accomplishes the necessary task.
*   **Readability:** Prioritize clear and concise code. Use meaningful variable and function names.
*   **Avoid Unnecessary Complexity:** Resist the temptation to over-engineer solutions.  Keep the code straightforward.

## 3. SOLID Principles

*   **Single Responsibility:** Each class/agent should have a single, well-defined purpose.
*   **Open/Closed Principle:**  The agent’s design should be open for extension but closed for modification.  New functionality should be added through new agents, not modifications to existing ones.
*   **Liskov Substitution Principle:** Subclasses should be substitutable for their base classes without altering the correctness of the program.
*   **Interface Segregation Principle:** Client code should not be required to know the implementation details of the interfaces it uses.
*   **Dependency Inversion Principle:**  High-level modules (agents) should not depend on low-level modules (implementation details), but should depend on abstractions.

## 4. YAGNI (You Aren't Gonna Need It)

*   **Avoid Unnecessary Features:**  Do not implement functionality that is not currently required.  Resist the urge to add features that may become obsolete.
*   **Focus on Core Functionality:**  Concentrate on delivering the essential requirements of the agent.

## 5. Development Practices

*   **Unit Testing:** All code must be thoroughly unit tested with minimal code coverage. Aim for 80% coverage.
*   **Code Reviews:** All code changes must be subject to rigorous code reviews by at least two team members.
*   **Static Analysis:**  Use a static analysis tool (e.g., SonarQube) to identify potential bugs and code quality issues.
*   **Continuous Integration:** Integrate code changes regularly into a CI/CD pipeline for automated testing and deployment.
*   **Documentation:**  Provide clear and concise documentation for each agent, including its purpose, inputs, outputs, and potential edge cases.
*   **Error Handling:** Implement robust error handling to prevent crashes and provide informative error messages.

## 6. Code Length Constraint: 180 Lines Max

*   Code lengths should be maintained within the 180-line limit.  Any code exceeding this limit will be flagged for review.

## 7. Test Coverage: 80% Minimum

*   Achieve 80% minimum test coverage for all agent functionality.  Automated tests should be designed to adequately cover the agent's core behavior.

## 8. File Structure & Organization

*   Each file should contain a single logical unit of functionality.
*   File names should be descriptive and follow a consistent naming convention.
*   Code should be well-formatted and easy to understand.

## 9.  Data Handling Considerations:

*   Data should be represented consistently and immutably where appropriate.
*   Error handling should gracefully manage unexpected data scenarios.

## 10.  AI Agent Specific Considerations

*   Consider the potential for edge cases and corner cases when designing agents.
*   Prioritize the development of modular and reusable components for AI agents.

These guidelines are intended to guide the creation of high-quality, maintainable, and effective AI coding agents.  Regular review and updates of these guidelines are encouraged.
```