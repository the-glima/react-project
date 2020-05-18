import {matchTierUtil, matchTiers} from '../match-tier-util'

describe('Util: Match Tier', () => {
  it('should return the string number with thousand comma separator', () => {
    for (const [i] of (matchTiers as any).entries()) {
      expect(matchTierUtil(i)).toMatchSnapshot()
    }
  })

  it('should return null if param is greater than matchTiers length', () => {
    expect(matchTierUtil(matchTiers.length + 1)).toBeNull()
  })

  it('should return null if collection is passed a wrong value', () => {
    expect(matchTierUtil(matchTiers.length + 1, undefined)).toBeNull()
  })
})
