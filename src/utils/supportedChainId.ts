import { SupportedChainId } from '../connectors/index'

/**
 * Returns the input chain ID if chain is supported. If not, return undefined
 * @param chainId a chain ID, which will be returned if it is a supported chain ID
 */
export function supportedChainIds(chainId: number | undefined): SupportedChainIds | undefined {
  if (typeof chainId === 'number' && chainId in SupportedChainIds) {
    return chainId
  }
  return undefined
}
