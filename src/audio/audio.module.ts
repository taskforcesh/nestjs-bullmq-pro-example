import { BullModule } from '@taskforcesh/nestjs-bullmq-pro';
import { Module } from '@nestjs/common';
import { AudioController } from './audio.controller';
import { AudioQueueEvents } from './audio.queueEvents';
import { AudioProcessor } from './audio.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'audio',
    }),
  ],
  controllers: [AudioController],
  providers: [AudioQueueEvents, AudioProcessor],
})
export class AudioModule {}
