export const VERSION = BCX_VERSION;

export const VERSION_CHECK_BOT: number = 37685;

// Server commit: a2e5454d002ed8d93c4009e59fdbd47c800277a9

// Game commit: fdf0d0323bf137fbfbaaf8a22ca77f96465beefa
export const FUNCTION_HASHES: Record<string, string[]> = {
	"Player.CanChange": ["082287C0"],
	"Player.GetBlindLevel": ["B0DE4B87"],
	"Player.GetDeafLevel": ["42CB6D63"],
	"Player.IsSlow": ["4D9B1713"],
	ActivityOrgasmPrepare: ["E4EE085D"],
	ActivityOrgasmStart: ["5C3627D7", "1F7E8FF9"],
	AppearanceClick: ["48FA3705", "BA17EA90", "F0B11F43", "CCD4AC31", "EECC190D", "19A126DF", "0D1455A9"],
	AppearanceGetPreviewImageColor: ["C4BDF19F"],
	AppearanceMenuBuild: ["264DC3C6"],
	AppearanceMenuClick: ["187B3371"],
	AppearanceMenuDraw: ["28FDF65B"],
	AppearanceRun: ["904E8E84", "45C6BA53", "6D5EFEAA", "6DDA14A1"],
	AsylumEntranceCanWander: ["3F5F4041", "609FA096"],
	CharacterAppearanceLoadCharacter: ["3641512F"],
	CharacterLoadEffect: ["0498693B"],
	ChatAdminClick: ["6B460E3D"],
	ChatAdminLoad: ["EB8AF0DB"],
	ChatAdminRun: ["CBE642C8"],
	ChatCreateRun: ["B0A3D236"],
	ChatRoomAdminAction: ["0C867BF6"],
	ChatRoomCanChangeClothes: ["87102B7C"],
	ChatRoomCanLeave: ["5BEE6F9D", "77FB6CF8"],
	ChatRoomClearAllElements: ["D1E1F8C3", "D9169281", "AFB1B3ED", "C49AA2C1"],
	ChatRoomClickCharacter: ["21AEE568"],
	ChatRoomCreateElement: ["4837C2F6", "6C4CCF41", "35D54383"],
	ChatRoomDrawCharacterOverlay: ["D58A9AD3", "4AE4AD9E"],
	ChatRoomFirstTimeHelp: ["078BEEA9"],
	ChatRoomIsOwnedByPlayer: ["82640FF9"],
	ChatRoomKeyDown: ["5FD37EC9", "111B6F0C", "33C77F12"],
	ChatRoomLovershipOptionIs: ["6F5CE6A0"],
	ChatRoomMessage: ["2C6E4EC3", "4340BC41", "6026A4B6", "E3EE1C77", "58EAAE61", "60ECCB9B"],
	ChatRoomOwnershipOptionIs: ["FE060F0B"],
	ChatRoomSendChat: ["39B06D87", "9019F7EF", "D64CCA1D", "7F540ED0"],
	ChatRoomSendEmote: ["30DB56A6"],
	ChatRoomSync: ["B67D8226", "DF257D5B"],
	ChatRoomUpdateDisplay: ["8DFC494A"],
	ChatSearchJoin: ["22514B80"],
	ChatSearchNormalDraw: ["6BEDBABB"],
	ChatSearchRun: ["4C56AC68", "06BFF877"],
	CheatFactor: ["594CFC45"],
	CheatImport: ["412422CC", "26C67608"],
	ColorPickerDraw: ["D1E82FB3"],
	CommandParse: ["12DC018B"],
	CommonKeyDown: ["A8EC46AB"],
	CommonSetScreen: ["17692CD7"],
	DialogCanUnlock: ["634C862B"],
	DialogClickExpressionMenu: ["5938DDC1"],
	DialogDrawExpressionMenu: ["EEFB3D22"],
	DialogDrawItemMenu: ["7B1D71E9", "0199F25B", "D832A940"],
	DialogDrawPoseMenu: ["4B146E82"],
	DialogFindPlayer: ["32851FF2"],
	DialogInventoryAdd: ["FD9268E1"],
	DialogItemClick: ["7039462A", "A08AC13E"],
	DialogLeaveItemMenu: ["B369F7C0"],
	DialogMenuButtonBuild: ["1D4265E4", "75E8CCCD"],
	DialogMenuButtonClick: ["9D8202CC", "8B705620"],
	DrawCharacter: ["A9C65470"],
	DrawGetImage: ["BEC7B0DA"],
	ElementIsScrolledToEnd: ["D28B0638"],
	ExtendedItemDraw: ["486A52DF", "9256549A", "45432E84", "455F5FDD", "BDE09647", "E831F57A"],
	FriendListBeepMenuSend: ["B81A695E"],
	FriendListLoadFriendList: ["72099AC9"],
	InfiltrationStealItems: ["1F601756"],
	InformationSheetClick: ["E535609B"],
	InformationSheetExit: ["75521907"],
	InformationSheetRun: ["58B7879C", "A8A56ACA"],
	LoginMistressItems: ["B58EF410"],
	LoginResponse: ["16C2C651", "FA9EFD03", "02E9D246", "548405C8", "4FE91547", "CF1C0400"],
	LoginStableItems: ["EA93FBF7"],
	MainHallWalk: ["E52553C4"],
	ManagementCanBeReleased: ["A2E2CA35"],
	ManagementCanBeReleasedOnline: ["3374263B"],
	ManagementCanBreakDatingLoverOnline: ["366AECAE"],
	ManagementCanBreakTrialOnline: ["51E9B7F4"],
	ManagementCanBreakUpLoverOnline: ["92E30200"],
	ManagementCannotBeReleased: ["755DB909"],
	ManagementCannotBeReleasedExtreme: ["2DA1650E"],
	ManagementCannotBeReleasedOnline: ["D1ACE212"],
	PrivateRansomStart: ["0E968EDD", "511E91C6"],
	ServerAccountBeep: ["2D918B69", "D2802EE7"],
	ServerSend: ["90A61F57"],
	SpeechGarble: ["1BC8E005", "15C3B50B", "9D669F73"],
	TextGet: ["4DDE5794"],
	ValidationResolveModifyDiff: ["C2FE52D3"]
};

export const FUNCTION_HASHES_NMOD: Record<string, string[]> = {
	"Player.CanChange": ["082287C0"],
	"Player.GetBlindLevel": ["B0DE4B87"],
	"Player.GetDeafLevel": ["42CB6D63"],
	"Player.IsSlow": ["4D9B1713"],
	ActivityOrgasmPrepare: ["AA5FC17F"],
	ActivityOrgasmStart: ["1F7E8FF9"],
	AppearanceClick: ["19A126DF"],
	AppearanceGetPreviewImageColor: ["C4BDF19F"],
	AppearanceRun: ["6DDA14A1"],
	AsylumEntranceCanWander: ["609FA096"],
	CharacterAppearanceLoadCharacter: ["3641512F"],
	CharacterLoadEffect: ["74D62AA1"],
	ChatAdminClick: ["3355D63D"],
	ChatAdminLoad: ["BF159B25"],
	ChatAdminRun: ["F92A0B2E"],
	ChatRoomAdminAction: ["0C867BF6"],
	ChatRoomCanChangeClothes: ["DF8A6550"],
	ChatRoomCanLeave: ["4ED4453D"],
	ChatRoomClearAllElements: ["904C924D"],
	ChatRoomClickCharacter: ["21AEE568"],
	ChatRoomCreateElement: ["76299AEC"],
	ChatRoomDrawCharacterOverlay: ["61F5F655"],
	ChatRoomDrawFriendList: ["327DA1B8"],
	ChatRoomFirstTimeHelp: ["078BEEA9"],
	ChatRoomIsOwnedByPlayer: ["82640FF9"],
	ChatRoomKeyDown: ["15C1889B"],
	ChatRoomLovershipOptionIs: ["6F5CE6A0"],
	ChatRoomMessage: ["1FA3BF62"],
	ChatRoomOwnershipOptionIs: ["FE060F0B"],
	ChatRoomSendChat: ["7F540ED0"],
	ChatRoomSendEmote: ["30DB56A6"],
	ChatRoomSync: ["A8E55C95"],
	ChatRoomUpdateDisplay: ["8B37556F"],
	CheatFactor: ["594CFC45"],
	CheatImport: ["1ECB0CC4"],
	ColorPickerDraw: ["FF93AF2E"],
	CommandParse: ["36295DDC"],
	CommonSetScreen: ["17692CD7"],
	DialogCanUnlock: ["634C862B"],
	DialogClickExpressionMenu: ["AFBB0323"],
	DialogDrawExpressionMenu: ["EEFB3D22"],
	DialogDrawItemMenu: ["05301080"],
	DialogDrawPoseMenu: ["4B146E82"],
	DialogFindPlayer: ["44A7263C"],
	DialogItemClick: ["C5E68BE8"],
	DialogMenuButtonBuild: ["76060837"],
	DialogMenuButtonClick: ["0E218260"],
	DrawCharacter: ["C9EC1A94"],
	DrawGetImage: ["BEC7B0DA"],
	ElementIsScrolledToEnd: ["D28B0638"],
	ExtendedItemDraw: ["E831F57A"],
	FriendListBeepMenuSend: ["C5C27229"],
	FriendListLoadFriendList: ["428B288B"],
	InfiltrationStealItems: ["1F601756"],
	InformationSheetClick: ["E535609B"],
	InformationSheetExit: ["75521907"],
	InformationSheetRun: ["19872251"],
	LoginMistressItems: ["984A6AD9"],
	LoginResponse: ["0D6009B6"],
	LoginStableItems: ["C3F50DD1"],
	MainHallWalk: ["E52553C4"],
	ManagementCanBeReleased: ["A2E2CA35"],
	ManagementCanBeReleasedOnline: ["3374263B"],
	ManagementCanBreakDatingLoverOnline: ["366AECAE"],
	ManagementCanBreakTrialOnline: ["51E9B7F4"],
	ManagementCanBreakUpLoverOnline: ["92E30200"],
	ManagementCannotBeReleased: ["755DB909"],
	ManagementCannotBeReleasedExtreme: ["2DA1650E"],
	ManagementCannotBeReleasedOnline: ["D1ACE212"],
	PrivateRansomStart: ["511E91C6"],
	ServerAccountBeep: ["207D9580"],
	SpeechGarble: ["9D669F73"],
	ValidationResolveModifyDiff: ["C2FE52D3"]
};
