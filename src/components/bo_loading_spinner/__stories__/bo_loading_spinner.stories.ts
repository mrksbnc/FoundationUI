import { BoLoadingSpinner } from '@/components/bo_loading_spinner';
import { BoColor } from '@/data';
import { BoSize } from '@/data/bo_size.constant';
import { BoLoaderTextPosition, BoLoaderVariant } from '@/data/loader.constant';
import { StorybookUtils } from '@/utils';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
	title: 'Components/bo-loading-spinner',
	component: BoLoadingSpinner,
	argTypes: {
		size: {
			description: 'The size of the spinner',
			control: { type: 'select' },
			options: Object.values(BoSize),
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoSize',
					detail: StorybookUtils.stringEnumFormatter(BoSize, 'BoSize'),
				},
			},
			defaultValue: BoSize.default,
		},
		variant: {
			description: 'The variant of the spinner',
			control: { type: 'select' },
			options: Object.values(BoLoaderVariant),
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoLoaderVariant',
					detail: StorybookUtils.stringEnumFormatter(
						BoLoaderVariant,
						'BoLoaderVariant',
					),
				},
			},
		},
		loaderText: {
			description: 'The text to be displayed in the loader',
			control: { type: 'text' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
			defaultValue: '',
		},
		customColor: {
			description: 'The custom color of the text',
			control: { type: 'color' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
		},
		textPosition: {
			description: 'The position of the text',
			control: { type: 'select' },
			options: Object.values(BoLoaderTextPosition),
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoLoaderTextPosition',
					detail: StorybookUtils.stringEnumFormatter(
						BoLoaderTextPosition,
						'BoLoaderTextPosition',
					),
				},
			},
			defaultValue: BoLoaderTextPosition.bottom,
		},
	},
} satisfies Meta<typeof BoLoadingSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		size: BoSize.default,
		variant: BoLoaderVariant.primary,
	},
};

export const Variants: Story = {
	render: (args) => ({
		components: { BoLoadingSpinner },
		setup() {
			const variants = Object.values(BoLoaderVariant);
			return { variants, ...args };
		},
		template: `
			<div class="flex flex-row gap-4">
                <span v-for="variant in variants" :key="variant" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
                    <bo-loading-spinner :size="size" :variant="variant"/>
                    <span class="text-small text-gray-500 font-medium">{{ variant }}</span>
                </span>
			</div>
		`,
	}),
	args: {
		size: BoSize.default,
		variant: BoLoaderVariant.primary,
	},
};

export const Sizes: Story = {
	render: (args) => ({
		components: { BoLoadingSpinner },
		setup() {
			const sizes = Object.values(BoSize);
			return { sizes, ...args };
		},
		template: `
			<div class="flex gap-2">
                <span v-for="size in sizes" :key="size" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
                    <bo-loading-spinner :size="size"/>
                    <span class="text-small text-gray-500 font-medium">{{ size }}</span>
                </span>
			</div>
		`,
	}),
	args: {
		size: BoSize.default,
		variant: BoLoaderVariant.primary,
	},
};

export const WithLoaderText: Story = {
	render: (args) => ({
		components: { BoLoadingSpinner },
		setup() {
			return { ...args };
		},
		template: `
            <div class="flex flex-col gap-4">
                <bo-loading-spinner :size="size" :variant="variant" :loader-text="loaderText"/>
            </div>
		`,
	}),
	args: {
		size: BoSize.default,
		variant: BoLoaderVariant.primary,
		loaderText: 'Loading...',
	},
};

export const CustomColor: Story = {
	render: (args) => ({
		components: { BoLoadingSpinner },
		setup() {
			return { ...args };
		},
		template: `
            <div class="flex flex-col gap-4">
                <bo-loading-spinner :size="size" :variant="variant" :custom-color="customColor"/>
            </div>
		`,
	}),
	args: {
		size: BoSize.default,
		variant: BoLoaderVariant.primary,
		customColor: BoColor.purple_400,
	},
};

export const TextPosition: Story = {
	render: (args) => ({
		components: { BoLoadingSpinner },
		setup() {
			return { ...args };
		},
		template: `
            <div class="flex flex-col gap-4">
                <bo-loading-spinner :size="size" :variant="variant" :loader-text="loaderText" :text-position="textPosition"/>
            </div>
		`,
	}),
	args: {
		size: BoSize.default,
		variant: BoLoaderVariant.primary,
		loaderText: 'Loading...',
		textPosition: BoLoaderTextPosition.side,
	},
};
