# Testing Setup

This project now includes a comprehensive testing infrastructure using Vitest and React Testing Library.

## Testing Stack

- **Vitest**: Fast unit test framework built for Vite
- **@testing-library/react**: React component testing utilities
- **@testing-library/jest-dom**: Custom Jest matchers for DOM assertions
- **@testing-library/user-event**: User interaction simulation
- **jsdom**: DOM environment for testing

## Available Scripts

```bash
# Run tests in watch mode (interactive)
pnpm test

# Run tests once
pnpm test:run

# Run tests with coverage (when coverage tools are added)
pnpm test:coverage
```

## Configuration

- **Vitest config**: Located in `vite.config.ts`
- **Test setup**: `src/test/setup.ts` - imports jest-dom matchers
- **TypeScript config**: `tsconfig.test.json` - specific settings for tests

## Test Coverage

The `BasicTypes` component is fully tested with the following scenarios:

- ✅ Renders basic variables (name, age, active status)
- ✅ Renders list of names correctly  
- ✅ Has proper heading structure
- ✅ Contains both ordered and unordered lists
- ✅ Button click toggles active state
- ✅ Button has correct text
- ✅ Contains horizontal rule separator

## Writing Tests

Tests are located in `src/` with the `.test.tsx` extension. Example:

```typescript
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MyComponent } from './MyComponent'

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })
})
```

## Next Steps

Consider adding:
- Test coverage reporting with `@vitest/coverage-v8`
- Visual regression testing
- E2E tests with Playwright
- More components and their corresponding tests