import { addExpense, editExpense, removeExpense} from '../../actions/expenses';

test("should setup remove expense action object", () => {
    const action = removeExpense({ id: "123abc"});
    expect(action).toEqual({type: "REMOVE_EXPENSE", id: "123abc"});
});

test("should setup edit expense action object", () => {
    const action = editExpense("123abc", { description: "text"});
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123abc",
        updates: { description: "text" }
    });
})

test("should setup addExpense action object", () => {
    const expense = {
        description: "test",
        note: "note",
        amount: 123,
        createdAt: 1000
    }
    const action = addExpense(expense);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expense,
            id: expect.any(String)
        }
    });
});

test("should setup addExpense default value", () => {
    const action = addExpense();
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    })
})