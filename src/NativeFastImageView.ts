import type { TurboModule } from 'react-native'
import { TurboModuleRegistry } from 'react-native'
import { Source } from './index'

export interface Spec extends TurboModule {
    preload: (sources: Source[]) => void
    clearMemoryCache: () => Promise<void>
    clearDiskCache: () => Promise<void>
    getCachePath: (source: Source) => Promise<string>
}

export default TurboModuleRegistry.get<Spec>('FastImageView')
