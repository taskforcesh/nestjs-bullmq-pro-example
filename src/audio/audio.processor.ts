import { Processor, WorkerHost } from '@taskforcesh/nestjs-bullmq-pro';
import { Logger } from '@nestjs/common';
import { JobPro } from '@taskforcesh/bullmq-pro';

@Processor('audio')
export class AudioProcessor extends WorkerHost {
  private readonly logger = new Logger(AudioProcessor.name);

  async process(job: JobPro) {
    this.logger.debug('Start transcoding...');
    this.logger.debug(job.data);
    this.logger.debug('Transcoding completed');
  }
}
