import { expect } from 'chai'
import env from './env-autoload'

describe('env-autoload', function() {
  it('loads env variables using simple import', function() {
    expect(process.env.TEST).to.equal('foo bar baz')
  })

  it('properly imports default export', function() {
    expect(env.TEST).to.equal('foo bar baz')
  })
})
