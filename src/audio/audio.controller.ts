import { InjectQueue } from '@taskforcesh/nestjs-bullmq-pro';
import { Controller, Post } from '@nestjs/common';
import { QueuePro } from '@taskforcesh/bullmq-pro';

@Controller('audio')
export class AudioController {
  constructor(@InjectQueue('audio') private readonly audioQueue: QueuePro) {}

  @Post('transcode')
  async transcode() {
    await this.audioQueue.add('transcode', {
      file: 'audio.mp3',
    });
  }
}
