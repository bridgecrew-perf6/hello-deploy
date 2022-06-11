import {render} from "@testing-library/react";
import DeployListPage from "./DeployListPage";
import Stomp from "stompjs";

jest.mock('stompjs', () => {
    const originalModule = jest.requireActual("stompjs")

    return {
        __esModule: true,
        ...originalModule,
        connect: jest.fn(),
    }
})

describe('', () => {
    beforeAll(() => {
        render(<DeployListPage />)
    })

    it('should ', () => {
        // expect(Stomp.)
        expect(1).toBe(1)
    });
})
