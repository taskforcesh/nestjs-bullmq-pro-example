import { InjectQueue, InjectFlowProducer } from '@taskforcesh/nestjs-bullmq-pro';
import { Controller, Post } from '@nestjs/common';
import { FlowProducerPro, QueuePro } from '@taskforcesh/bullmq-pro';

@Controller('audio')
export class AudioController {
  constructor(
    @InjectQueue('audio') private readonly audioQueue: QueuePro,
    @InjectFlowProducer('audioFlowProducer') private audioFlowProducer: FlowProducerPro,
  ) {}

  @Post('transcode')
  async transcode() {
    await this.audioQueue.add('transcode', {
      file: 'audio.mp3',
    });
  }

  @Post('transcode-flow')
  async transcodeFlow() {
    await this.audioFlowProducer.add({
      name: 'transcode-parent',
      queueName: 'audio',
      data: {},
      children: [
        {
          name: 'transcode-child',
          data: { idx: 0, foo: 'bar' },
          queueName: 'audio',
        },
      ],
    });
  }
}
