Per the discussion in the 2024-07-15 teleconference (along with preceding calls on the same topic), there has been a call for voting on the resolution of error handling in the LDML46 version of the specification.

# WORKING GROUP BALLOT

**_Please read the instructions CAREFULLY before responding._**

Please carefully read the design document before responding.
Please make pull requests against the design document for the addition of material facts or corrections.

## Balloting Instructions

> Using the SINGLE TRANSFERABLE VOTE process, rank your choice(s) for the error behavior.

The **_deadline_** is **1700 (5 PM) in the `America/Los_Angeles` time zone on Sunday, 21 July 2024** Votes received after the deadline will be considered at the discretion of the chair.

- A group member in good standing MAY submit exactly one vote consisting of a ranked set of choices
  up until the deadline.
- A group member MAY edit, change, or delete their vote up until the deadline.
- Votes MUST be submitted as a comment on this github issue.
  Group members who cannot submit a comment on this issue should contact the chair (@aphillips) for assistance.
- Votes MUST contain a stack ranked list of candidate options.
- Votes MUST only contain votes for candidate options. Write in votes are not acceptable.
- A vote MUST have at least one item in order to be counted and MAY rank as many items as desired.
- Only ranked votes will be counted. That is, do not submit a vote equating two entries.
- Group members MUST NOT comment on the votes of others in this issue. "Electioneering" or non-voting commentary is not permitted in the issue **_except_** the chair may seek clarification of a vote. Use # to discuss.

## Candidates

The candidates are:

(1) MUST and MUST
(2) MUST or MUST
(3) MUST and SHOULD
(4) SHOULD and MUST
(5) Error handling is not a normative requirement

## Candidate Descriptions

### (1) MUST and MUST

- Implementations MUST provide a mechanism for signaling errors. There is no specific requirement for what form signaling an error takes.
- Implementations MUST provide a mechanism for getting a fallback representation of a message that produces a formatting or selection error. Note that this can be entirely separate from the first requirement.
- An implementation is not conformant unless it provides access to both behaviors. It is compliant to do both in a single formatting attempt.

### (2) MUST or MUST

- Implementation MUST either signal an error or errors _or_ provide a fallback representation of a message in a given formatting attempt. 
   - A single given message formatting attempt containing one or more errors can produce either error signaling (such as throwing an exception or returning an error code) or return a fallback string. 
   - It is compliant to do both in a single formatting attempt. It is compliant to implement signaling and fallback separately (same as `(1)`). It is not compliant to do neither.

### (3) MUST and SHOULD
- Implementations MUST provide a mechanism for signaling errors. There is no specific requirement for what form signaling an error takes.
- Implementations SHOULD provide a mechanism for getting a fallback representation of a message that produces a formatting or selection error. Note that this can be entirely separate from the first requirement. 
- Implementations are conformant if they only signal errors.

### (4) SHOULD and MUST
- Implementations SHOULD provide a mechanism for signaling errors. There is no specific requirement for what form signaling an error takes.
- Implementations MUST provide a mechanism for getting a fallback representation of a message that produces a formatting or selection error. Note that this can be entirely separate from the first requirement. 
- Implementations are conformant if they only provide a fallback representation of a message.

### (5) Error handling is not a normative requirement
- Implementations are not required by MF2 to signal errors or to provide access to a fallback representation. 
   - The specification provides guidance on error conditions; on what error types exist; and what the fallback representation is. Nearly all implementations will probably implement one or both of these behaviors. 
   - Tests are provided for both behaviors, but it is up to the implementer to decide whether to expose errors as enumerated by MF2 or provide fallback formatting.
