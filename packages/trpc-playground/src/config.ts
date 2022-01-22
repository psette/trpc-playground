import { TrpcPlaygroundConfig } from '@trpc-playground/types'
import mergeDeep from 'lodash/merge'
import { zodResolveTypes } from '.'

const defineConfig = <T extends Partial<TrpcPlaygroundConfig>>(config: T): T => config

const getDefaultConfig = () =>
  defineConfig({
    resolveTypes: zodResolveTypes,
    polling: {
      enable: true,
      interval: 4000,
    },
    renderOptions: {
      cdnUrl: '//cdn.jsdelivr.net/npm',
    },
    request: {
      globalHeaders: {},
      batching: true,
    },
    server: {},
  })

export const resolveConfig = (config: TrpcPlaygroundConfig) => mergeDeep({}, getDefaultConfig(), config)
