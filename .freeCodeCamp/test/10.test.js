const assert = require('assert');
const { getLastCommand } = require('./utils');
describe('tests', () => {
  let lastCommand;
  before(async () => {
    lastCommand = await getLastCommand();
  });
  it('should pass', async () => {
    assert(lastCommand[0] === 'echo' && lastCommand[1] === 'hello' && lastCommand[2] === 'terminal');
  });
});