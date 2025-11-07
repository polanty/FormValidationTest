import {
  isEmailValid,
  isDateInPastOrToday,
  isNameValid,
  isPhoneValid,
} from "./utility.js";

// Email validation tests
describe("Email Validation", () => {
  test("Valid email addresses", () => {
    expect(isEmailValid("test@example.com")).toBe(true);
  });

  test("Invalid email addresses", () => {
    expect(isEmailValid("test@.com")).toBe(false);
  });

  test("Invalid email addresses", () => {
    expect(isEmailValid("test.com")).toBe(false);
  });
});

// Date validation tests
describe("Date Validation", () => {
  test("Date in the past or today", () => {
    expect(isDateInPastOrToday("2025-11-05")).toBe(true);
  });

  test("Date in the future", () => {
    expect(isDateInPastOrToday("2026-11-05")).toBe(false);
  });

  test("Date in the future", () => {
    expect(isDateInPastOrToday("2026-11")).toBe(false);
  });
});

// Phone validation tests
describe("Phone Validation", () => {
  test("Valid phone numbers", () => {
    expect(isPhoneValid("1234567890")).toBe(true); // 10-digit number
    expect(isPhoneValid("+11234567890")).toBe(true); // International format
    expect(isPhoneValid("(123) 456-7890")).toBe(true); // Formatted with parentheses
  });

  test("Invalid phone numbers", () => {
    expect(isPhoneValid("12345")).toBe(false); // Too short
    expect(isPhoneValid("123456789012345")).toBe(false); // Too long
    expect(isPhoneValid("abc1234567")).toBe(false); // Contains letters
    expect(isPhoneValid("123-456-7890-")).toBe(false); // Invalid format
  });
});

// Name validation tests
describe("Name Validation", () => {
  test("Valid names", () => {
    expect(isNameValid("John Doe")).toBe(true); // Valid full name
    expect(isNameValid("Jane")).toBe(true); // Single name
  });

  test("Invalid names", () => {
    expect(isNameValid("")).toBe(false); // Empty name
    expect(isNameValid("12345")).toBe(false); // Numeric name
    expect(isNameValid("John123")).toBe(false); // Name with numbers
    expect(isNameValid("!@#$%")).toBe(false); // Special characters only
  });
});
